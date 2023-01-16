import * as Yup from "yup";

import {validateLength, validateExpiry, validateFormat, validateMonth} from "../utility/validateTest";

const accountSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short login")
    .max(50, "Too long login")
    .required("This field is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("This field is required"),
});

const paymentSchema = Yup.object().shape({
  amount: Yup.number()
    .required("This field is required")
    .min(1, "The amount must be greater than 1"),
  cardNumber: Yup.string()
    .required("This field is required")
    .test("cardNumber", "Format must be xxxx xxxx xxxx xxxx", (value) => validateLength(value, 19)),
  expDate: Yup.string()
    .required("This field is required")
    .test("expDate", "Month is not valid", (value) => validateMonth(value))
    .test("expDate", "Format must be mm/yyyy", (value) => validateFormat(value))
    .test("expDate", "Card is expired", (value) => validateExpiry(value)),
  cvv: Yup.number()
    .required("This field is required")
    .test("cvv", "Format must be xxx", (value) => validateLength(value, 3)),
});

export {accountSchema, paymentSchema};