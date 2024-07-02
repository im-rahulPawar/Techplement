import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = "mongodb://localhost:27017/Quotes-App";
export const connectToMongoose = async() =>{
    try{
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongodb connected using Mongoose");
    }catch(error){
        console.log("Error while connecting to database");
        console.log(error.message);
    }
}