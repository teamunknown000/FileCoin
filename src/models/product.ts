import { Schema, model, models } from "mongoose";
import type IProduct from "~/types/product";
import { Models } from "~/utils";
import Errors from "~/errors/product";

const ProductErrors = new Errors(Models.product)

export default models[Models.product] || model<IProduct>(Models.product, new Schema<IProduct>({
    name: {
        type: String,
        required: ProductErrors.modelFieldRequired("name")
    },
    description: {
        type: String,
        required: ProductErrors.modelFieldRequired("description")
    },
    images: {
        type: [String],
        default: []
    },
    thumbImage: {
        type: Number,
        default: 0
    },
    categories: {
        type: [Schema.Types.ObjectId],
        ref: Models.category,
        default: []
    }
}))