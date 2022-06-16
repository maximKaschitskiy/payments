import Joi from "joi";

const apiValidateSchema = Joi.object({
    cardNumber: Joi.number().required().min(16),
    expDate: Joi.string().required().min(5),
    cvv: Joi.number().required().min(3),
    amount: Joi.number().required(),
    email: Joi.string().required().email(),
    name: Joi.string().required(),
});

export default apiValidateSchema;