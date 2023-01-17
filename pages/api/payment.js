import connectDB from "../middleware/mongodb";
import bcrypt from "bcrypt";
import Payment from "./models/payments";
import validateInputs from "../middleware/validate";
import authMiddle from "../middleware/auth";
import mongoose from 'mongoose';

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
        res.statusMessage = "Created successfully";
        res.status(201).send({
          amount: payment.amount,
          _id: payment._id,
        });
        res.end();
        return;
      })
      .catch((err) => {
        console.log({err});
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Bad Request" }));
        return err;
      });
    } else {
      console.log({err});
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "Bad Request" }));
      return;
    }
};

export default authMiddle(connectDB(validateInputs(handler)));
