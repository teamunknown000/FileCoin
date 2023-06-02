import type { MongoDocument } from ".";

export default interface IProduct extends MongoDocument {
    name: string
    description: string
    images: string[]
    thumbImage: number
    categories: MongoDocument["_id"][]
}