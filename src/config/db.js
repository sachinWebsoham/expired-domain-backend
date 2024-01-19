// src/config/db.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const mongoUrl =
  "mongodb+srv://sachin:X08YxVCW4mE3CVvD@cluster0.3ppwxrm.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, { dbName: "expired-Domains" });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
