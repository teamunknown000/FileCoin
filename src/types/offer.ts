import type { MongoDocument, Time } from ".";
import type { Plans } from "./plan";

export default interface IOffer extends MongoDocument {
    name: string
    description: string
    applicable: string[]
    duration: {
        start: Time
        end: Time
    }
    categories: MongoDocument["_id"][]
    discount?: {
        [Plans.standard]?: number
        [Plans.pro]?: number
        [Plans.gold]?: number
        [Plans.premium]?: number
    }
    products?: MongoDocument["_id"][]
}