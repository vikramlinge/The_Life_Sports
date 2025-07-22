import mongoose from "mongoose";
import { db_name } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.Mongobd_URL}/${db_name}`
    );
    
    console.log(
      `\n mongoDB connected !! DB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("mongoDB connecting error :", error);
    process.exit(1);
  }
};

export default connectDB;
