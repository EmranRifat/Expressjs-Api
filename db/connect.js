
// db/connect.js

const mongoose = require('mongoose');
require('dotenv').config(); 

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ni4gi.mongodb.net/test-db?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri); // 🔥 No deprecated options
    console.log("MongoDB connected successfully 🔥");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;





