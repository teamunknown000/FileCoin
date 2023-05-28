import validator from "validator"

export const validatePhone = (phone: string) => /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(phone)

export const validateEmail = (email: string) => validator.isEmail(email)