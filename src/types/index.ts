import type { Schema } from "mongoose";

export interface MongoDocument {
    _id: Schema.Types.ObjectId
    __v?: number
}
export type Time = Date|string|number
export type ResponseType = string|object|string[]|object[]