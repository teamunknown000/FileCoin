import { Schema, model } from "mongoose";
import type IPlan from "~/types/plan";
import { Models } from "~/utils";
import Errors from "~/errors/plan";

const PlanErrors = new Errors(Models.plan)

export default model<IPlan>(Models.plan, new Schema<IPlan>({
    name: {
        type: String,
        required: PlanErrors.modelFieldRequired("name")
    },
    description: {
        type: String,
        required: PlanErrors.modelFieldRequired("description")
    },
    discount: {
        type: Number,
        required: PlanErrors.modelFieldRequired("discount")
    },
    isDeliveryFree: {
        type: Boolean,
        default: false
    }
}))