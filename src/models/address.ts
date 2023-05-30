import { Schema, model, models } from "mongoose";
import type IAddress from "~/types/address";
import { Models } from "~/utils/";
import Errors from "~/errors/address";
import { AddressTypes } from "~/types/address";
import { validatePhone } from "~/utils/validators";

const AddressErrors = new Errors(Models.address)
const addressTypes = Object.keys(AddressTypes)

export default models[Models.address] || model<IAddress>(Models.address, new Schema<IAddress>({
    name: {
        type: String,
        required: AddressErrors.modelFieldRequired("name")
    },
    phone: {
        type: String,
        required: AddressErrors.modelFieldRequired("phone"),
        validate: {
            validator: validatePhone,
            message: Errors.PHONE_INVALID
        }
    },
    type: {
        type: String,
        enum: addressTypes,
        default: addressTypes[0]
    },
    street: {
        type: String,
        required: AddressErrors.modelFieldRequired("street")
    },
    landmark: {
        type: String,
        required: AddressErrors.modelFieldRequired("landmark")
    },
    city: {
        type: String,
        required: AddressErrors.modelFieldRequired("city")
    },
    state: {
        type: String,
        required: AddressErrors.modelFieldRequired("state")
    },
    country: {
        type: String,
        required: AddressErrors.modelFieldRequired("country")
    },
    pinCode: {
        type: Number,
        required: AddressErrors.modelFieldRequired("pin code")
    }
}))