import type { Schema } from "mongoose";
import type { SWRResponse } from "swr/_internal";

export interface MongoDocument {
    _id: Schema.Types.ObjectId
    __v?: number
}
export type Time = Date | string | number
export type ResponseType = string | object | string[] | object[]
export interface IApiResponse {
    data: ResponseType
    status: "success" | "fail"
}
export type FetcherType<T> = SWRResponse<T, IApiResponse>