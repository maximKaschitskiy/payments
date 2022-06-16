import Joi from "joi";

const apiValidateSchema = Joi.object({
    cardNumber: Joi.string().length(16).pattern(/^[0-9]+$/).required(),
    expDate: Joi.string().length(7).pattern(/^(0\d|1[0-2])\/\d{4}$/).required(),
    cvv: Joi.string().length(3).pattern(/^[0-9]+$/).required(),
    amount: Joi.string().min(1).max(9).pattern(/^[0-9]+$/).required(),
});

export default apiValidateSchema;