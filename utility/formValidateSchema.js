import * as Yup from "yup";

import {validateLength, validateExpiry} from "../utility/validateTest";

const accountSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const paymentSchema = Yup.object().shape({
  amount: Yup.number().required("Required"),
  cardNumber: Yup.number()
    .required("Required")
    .test("cvv", "Too Short!", (value) => validateLength(value, 16)),
  expDate: Yup.string()
    .required("Required")
    .min(7, "Too Short!")
    .max(7, "Too Short!")
    .test("expDate", "Not a valid", (value) => validateExpiry(value)),
  cvv: Yup.number()
    .required("Required")
    .test("cvv", "Too Short!", (value) => validateLength(value, 3)),
});

export {accountSchema, paymentSchema};