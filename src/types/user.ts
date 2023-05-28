import type { MongoDocument, Time } from ".";
import type { Plans } from "./plan";

export enum UserTypes {
    seller = "seller",
    customer = "customer",
    admin = "admin"
}

export default interface IUser extends MongoDocument {
    name: string
    email: string
    phone: string
    password: string
    plan: {
        name: Plans|string
        start: Time
        expiry: Time
    }
    type: UserTypes|string
    defaultAddress: MongoDocument["_id"]
    addresses: MongoDocument["_id"][]
    wallet: string
    cart: {
        productSeller: MongoDocument["_id"]
        quantity: number
    }[]
}