const env = require("dotenv")
const mongoose = require("mongoose");
env.config();
require("colors");

const connectDb = async () => {
  try {
  //  invalid credentials 
    const conn = await mongoose.connect("mongodb+srv://designsexpert5company1212:fcprimedata@cluster0.dgwix.mongodb.net/", {useNewUrlParser: true});
    
    console.log(`MongoDB Connected: ${conn.connection.host}`.yellow);
  } catch (error) {
    console.error(`Error: ${error.message}`.red);
    process.exit(1);
  }
  
};

module.exports = connectDb;
