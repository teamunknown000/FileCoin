import useSwr from "swr";
import { IApiResponse } from "~/types";
import fetcher from "~/utils/api-handle";

export default function useFetcher<T>(url: string | null) {
    return useSwr<T, IApiResponse>(url, fetcher<T>);
}