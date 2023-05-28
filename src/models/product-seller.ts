import { Schema, model } from "mongoose";
import type IProductSeller from "~/types/product-seller";
import { Models } from "~/utils";
import Errors from "~/errors/product-seller";
import { Plans } from "~/types/plan";

const ProductSellerErrors = new Errors(Models.productSeller)

export default model<IProductSeller>(Models.productSeller, new Schema<IProductSeller>({
    product: {
        type: Schema.Types.ObjectId,
        required: ProductSellerErrors.modelFieldRequired("product"),
        ref: Models.product
    },
    seller: {
        type: Schema.Types.ObjectId,
        required: ProductSellerErrors.modelFieldRequired("seller"),
        ref: Models.seller
    },
    discount: {
        [Plans.standard]: {
            percentage: Number,
            isDeliveryFree: {
                type: Boolean,
                default: true
            }
        },
        [Plans.pro]: {
            percentage: Number,
            isDeliveryFree: {
                type: Boolean,
                default: true
            }
        },
        [Plans.gold]: {
            percentage: Number,
            isDeliveryFree: {
                type: Boolean,
                default: true
            }
        },
        [Plans.premium]: {
            percentage: Number,
            isDeliveryFree: {
                type: Boolean,
                default: true
            }
        }
    },
    quantity: {
        type: Number,
        required: ProductSellerErrors.modelFieldRequired("quantity")
    }
}))