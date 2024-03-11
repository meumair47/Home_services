const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("database connecting failed");
  }
};

module.exports = connectDB;
