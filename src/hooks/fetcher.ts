import useSwr from "swr"
import useSwrMutation from "swr/mutation"
import type { IApiResponse } from "~/types"
import { fetcher, poster } from "~/utils/api-handler"

export function useGetRequest<T>(url: string) {
    return useSwr<T, IApiResponse>(url, fetcher<T>)
}

export function usePostRequest<T>(url: string) {
    return useSwrMutation<T, IApiResponse>(url, poster<T>)
}

export function usePutRequest<T>(url: string) {
    return useSwrMutation<T, IApiResponse>(url, poster<T>)
}

export function useDeleteRequest<T>(url: string) {
    return useSwrMutation<T, IApiResponse>(url, poster<T>)
}