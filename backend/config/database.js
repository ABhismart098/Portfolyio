import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path: "./config/code.env"})

const Connection = () => {
    mongoose.connect(process.env.MONGODB_URI )
    .then((c) => {
        console.log(`MongoDB connection established to: ${c.connection.host}`);
    })
    .catch((err) => {
        console.log(`MongoDB connection error: ${err}`);
    });
};

export default Connection;
