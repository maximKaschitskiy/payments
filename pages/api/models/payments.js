import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const payments = new mongoose.Schema({
  cardNumber: {
    type: String,
    required: true
  },
  expDate: {
    type: String,
    required: true
  },
  cvv: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  }
});

mongoose.models = {};

const Payment = mongoose.model('Payments', payments);

export default Payment;