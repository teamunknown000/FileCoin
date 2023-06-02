import axios from "axios"
import type { IApiResponse } from "~/types"

export async function fetcher<T>(url: string) {
    return await axios.get<IApiResponse>(url).then(res => res.data.data as T).catch(err => err.response.data)
}

export async function poster<T>(url: string) {
    return await axios.post<IApiResponse>(url).then(res => res.data.data as T).catch(err => err.response.data)
}

export async function putter<T>(url: string) {
    return await axios.put<IApiResponse>(url).then(res => res.data.data as T).catch(err => err.response.data)
}

export async function deleter<T>(url: string) {
    return await axios.delete<IApiResponse>(url).then(res => res.data.data as T).catch(err => err.response.data)
}