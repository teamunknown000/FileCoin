import { Schema, model, models } from "mongoose";
import Errors from "~/errors/offer";
import type IOffer from "~/types/offer";
import { Plans } from "~/types/plan";
import { Models } from "~/utils";

const OfferErrors = new Errors(Models.offer)

export default models[Models.offer] || model<IOffer>(Models.offer, new Schema<IOffer>({
    name: {
        type: String,
        required: OfferErrors.modelFieldRequired("name")
    },
    description: {
        type: String,
        required: OfferErrors.modelFieldRequired("description")
    },
    applicable: {
        type: [String],
        required: OfferErrors.modelFieldRequired("applicable")
    },
    duration: {
        type: {
            start: {
                type: Date,
                required: OfferErrors.modelFieldRequired("duration.start")
            },
            end: {
                type: Date,
                required: OfferErrors.modelFieldRequired("duration.end")
            }
        },
        required: OfferErrors.modelFieldRequired("duration")
    },
    categories: {
        type: [String],
        default: []
    },
    discount: {
        [Plans.standard]: Number,
        [Plans.pro]: Number,
        [Plans.gold]: Number,
        [Plans.premium]: Number
    },
    products: {
        type: [Schema.Types.ObjectId],
        default: [],
        ref: Models.product
    }
}))