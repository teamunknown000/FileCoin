import Errors from "./main";

export default class UserErrors extends Errors {
    static EMAIL_INVALID = "The email of the user is invalid. Please enter a correct email"

    static PHONE_INVALID = "The phone number of the set location is invalid. Please enter a correct phone number."

}