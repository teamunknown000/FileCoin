import type { MongoDocument } from ".";

export enum AddressTypes {
    home = "home",
    office = "office"
}

export default interface IAddress extends MongoDocument {
    name: string
    phone: string
    type: AddressTypes|string
    street: string
    landmark: string
    city: string
    state: string
    country: string
    pinCode: number
}