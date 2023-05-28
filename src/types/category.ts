import type { MongoDocument } from ".";

export interface ICategory extends MongoDocument {
    name: string
    description: string
}