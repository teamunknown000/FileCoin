import { Schema, model, models } from "mongoose";
import Errors from "~/errors/category";
import type { ICategory } from "~/types/category";
import { Models } from "~/utils";

const CategoryErrors = new Errors(Models.category)

export default models[Models.category] || model<ICategory>(Models.category, new Schema<ICategory>({
    name: {
        type: String,
        required: CategoryErrors.modelFieldRequired("name")
    },
    description: {
        type: String,
        required: CategoryErrors.modelFieldRequired("description")
    }
}))