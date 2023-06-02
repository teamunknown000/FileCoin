import type { IApiResponse, ResponseType } from "~/types"

export default class Errors {
    static DB_ERROR = "Internal server error. Try again later!"
    static OBJECT_NOT_FOUND = "The requested object not found"

    static generateResponse = (data: ResponseType, isSuccess: boolean = false): IApiResponse => ({ status: isSuccess ? "success" : "fail", data })
    static fieldRequired = (field: string, model: string) => `The ${field} of the ${model} is required`
    static fieldInvalid = (field: string, model: string, extra?: string) => `The ${field} of the ${model} is invalid.${" " + extra || ""}`

    model: string = ""
    constructor(model: string) {
        this.model = model
    }
    fieldRequired = (field: string) => `The ${field} of the ${this.model} is required`
    modelFieldRequired = (field: string): [boolean, string] => [true, this.fieldRequired(field)]
}