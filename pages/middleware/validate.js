import apiValidateSchema from "../../utility/apiValidateSchema";

const validateInputs = (handler) => async (req, res) => {
    const val = apiValidateSchema.validate({
      cardNumber: req.body.cardNumber,
      expDate: req.body.expDate,
      cvv: req.body.cvv,
      amount: req.body.amount,
    });
    if (!val.error) {
      return handler(req, res);
    } else {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: val.error.message }));
      return;
    }
  };

export default validateInputs;
