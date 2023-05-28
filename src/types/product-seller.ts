import type { MongoDocument } from ".";
import type { Plans } from "./plan";

export interface IProductSellerDiscount {
    percentage: number
    isDeliveryFree: boolean
}

export default interface IProductSeller extends MongoDocument {
    product: MongoDocument["_id"]
    seller: MongoDocument["_id"]
    discount?: {
        [Plans.standard]?: IProductSellerDiscount
        [Plans.pro]?: IProductSellerDiscount
        [Plans.gold]?: IProductSellerDiscount
        [Plans.premium]?: IProductSellerDiscount
    }
    quantity: number
}