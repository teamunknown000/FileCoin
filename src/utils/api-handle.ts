import axios from "axios";
import { IApiResponse } from "~/types";
import { TextDecoder, TextEncoder } from "util";

Object.assign(global, { TextDecoder, TextEncoder })

export default async function fetcher<T>(url: string) {
    return await axios.get<IApiResponse>(url).then(res => res.data).then(res => res.data as T).catch(err => err.response.data)
}
