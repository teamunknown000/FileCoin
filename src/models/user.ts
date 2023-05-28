import { model, Schema } from "mongoose";
import Errors from "~/errors/user";
import { Plans } from "~/types/plan";
import type IUser from "~/types/user";
import { UserTypes } from "~/types/user";
import { Models } from "~/utils";
import { validateEmail, validatePhone } from "~/utils/validators";

const UserErrors = new Errors(Models.user)
const userTypes = Object.keys(UserTypes);
const planTypes = Object.keys(Plans)

export default model<IUser>(Models.user, new Schema<IUser>({
    name: {
        type: String,
        required: UserErrors.modelFieldRequired("name")
    },
    email: {
        type: String,
        required: UserErrors.modelFieldRequired("email"),
        unique: true,
        validate: {
            validator: validateEmail,
            message: Errors.EMAIL_INVALID
        }
    },
    phone: {
        type: String,
        required: UserErrors.modelFieldRequired("phone"),
        validate: {
            validator: validatePhone,
            message: Errors.PHONE_INVALID
        }
    },
    password: {
        type: String,
        required: UserErrors.modelFieldRequired("password")
    },
    plan: {
        type: {
            name: {
                type: String,
                enum: planTypes,
                default: planTypes[0]
            },
            start: {
                type: Date,
                required: UserErrors.modelFieldRequired("plan.start")
            },
            expiry: {
                type: Date,
                required: UserErrors.modelFieldRequired("plan.expiry")
            }
        },
        required: UserErrors.modelFieldRequired("plan")
    },
    type: {
        type: String,
        enum: userTypes,
        default: userTypes[0]
    },
    defaultAddress: {
        type: Schema.Types.ObjectId,
        required: UserErrors.modelFieldRequired("defaultAddress"),
        ref: Models.address
    },
    addresses: {
        type: [Schema.Types.ObjectId],
        default: [],
        required: UserErrors.modelFieldRequired("addresses"),
        ref: Models.address
    },
    wallet: {
        type: String,
        required: UserErrors.modelFieldRequired("walletAddress")
    },
    cart: {
        type: [{
            productSeller: {
                type: Schema.Types.ObjectId,
                ref: Models.productSeller,
                required: UserErrors.modelFieldRequired("cart.productSeller")
            },
            quantity: {
                type: Number,
                default: 1
            }
        }],
        default: []
    }
}))