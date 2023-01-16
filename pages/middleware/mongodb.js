import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  } else {
    await mongoose
      .connect(process.env.MONGODB_URI, {
        bufferCommands: false,
      })
      .then((mongoose) => {
        return mongoose;
      })
      .then(() => {
        return handler(req, res);
      })
      .catch((err) => {
        console.log({err});
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Internal Server Error" }));
        return err;
      });
  }
};

export default connectDB;