import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose
    .connect(process.env.MONGODB_URI, {
      bufferCommands: false,
    })
    .then((mongoose) => {
      return mongoose;
    })
    .then(() => console.log("conntect to DB successful"))
    .catch((err) => console.log(err));
  return handler(req, res);
};

export default connectDB;
