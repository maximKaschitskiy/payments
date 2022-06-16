import apiValidateSchema from "../../utility/apiValidateSchema";

const validateInputs = (handler) => {
  return async (req, res) => {
    const val = apiValidateSchema.validate({
      cardNumber: req.body.cardNumber,
      expDate: req.body.expDate,
      cvv: req.body.cvv,
      amount: req.body.amount,
      email: req.body.email,
      name: req.body.name,
    });
    if (!val.error) {
      return handler(req, res);
    } else {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: val.error.message }));
    }
  };
};

export default validateInputs;
