require('dotenv').config({path:"./config.js"}); 
const mongoose = require("mongoose");
require("colors");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://designsexpert5company1212:admin123@cluster0.dgwix.mongodb.net/", {useNewUrlParser: true});
    
    console.log(`MongoDB Connected: ${conn.connection.host}`.yellow);
  } catch (error) {
    console.error(`Error: ${error.message}`.red);
    process.exit(1);
  }
  
};

module.exports = connectDb;
