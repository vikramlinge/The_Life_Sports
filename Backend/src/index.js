// require (dotenv).config({path:'./env'})

// import mongoose from "mongoose";
// import { db_name } from "./constant";

import { app } from "./app.js";
import connectDB from "./db/index.js";
import { configDotenv } from "dotenv";

configDotenv({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.port || 8000, () => {
      console.log(`server is running at port : ${process.env.port}`);
    });
  })
  .catch((error) => {

    console.log("mongoDb connection Failed :", error);
  });

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.Mongobd_URL}/${db_name}`);

    app.on("error", (error) => {
      console.log("err:", error);
      throw error;
    });

    app.listen(process.env.port, () => {
      console.log(`App is Listing on Port ${process.env.port}`);
    });
  } catch (error) {
    console.error("Error : ", error);
    throw error;
  }
})();

*/
