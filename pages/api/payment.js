import connectDB from "../middleware/mongodb";
import bcrypt from "bcrypt";
import Payment from "../models/payments";
import validateInputs from "../middleware/validate";
import authMiddle from "../middleware/auth";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { cardNumber, expDate, cvv, amount } = req.body;

    const hash = await bcrypt.hash(cvv, 10);

    Payment.create({
      cardNumber,
      expDate,
      cvv: hash,
      amount,
    })
      .then((payment) => {
        return res.status(201).send({
          amount: payment.amount,
          _id: payment._id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Bad Request" }));
    return;
  }
};

export default authMiddle(connectDB(validateInputs(handler)));
