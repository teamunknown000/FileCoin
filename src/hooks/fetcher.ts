import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { PORT } from "~/config"
import { IApiResponse } from "~/types"

const baseUrl = `https://localhost:${PORT}/`

const apiBasePath = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: () => ({})
})

export function useGetRequest<T>(url: string) {
    const { useGetRequestQuery } = apiBasePath.injectEndpoints({
        endpoints: (build) => ({
            getRequest: build.query({
                query: () => ({ url }),
                transformResponse: (res: IApiResponse) => res.data as T
            })
        })
    })
    return useGetRequestQuery
}

export function usePostRequest<T>(url: string) {
    const { usePostRequestMutation } = apiBasePath.injectEndpoints({
        endpoints: (build) => ({
            postRequest: build.mutation({
                query: (data) => ({ 
                    url, 
                    method: "POST",
                    body: data
                }),
                transformResponse: (res: IApiResponse) => res.data as T,
            })
        })
    })
    return usePostRequestMutation
}

export function usePutRequest<T>(url: string) {
    const { usePutRequestMutation } = apiBasePath.injectEndpoints({
        endpoints: (build) => ({
            putRequest: build.mutation({
                query: (data) => ({ 
                    url, 
                    method: "PUT",
                    body: data
                }),
                transformResponse: (res: IApiResponse) => res.data as T,
            })
        })
    })
    return usePutRequestMutation
}

export function useDeleteRequest<T>(url: string) {
    const { useDeleteRequestMutation } = apiBasePath.injectEndpoints({
        endpoints: (build) => ({
            deleteRequest: build.mutation({
                query: () => ({ url, method: "DELETE" }),
                transformResponse: (res: IApiResponse) => res.data as T
            })
        })
    })
    return useDeleteRequestMutation
}