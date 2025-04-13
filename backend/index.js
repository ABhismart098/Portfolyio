import app from "./app.js";
import dotenv from "dotenv";
import Connection from "./config/database.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config({ path: "../config/config.env" });
const port = process.env.PORT || 4000;

app.listen(port, (err) => {
    app.get("/", (req, res) => {
        res.send("API is running...");
    });
    // Check if the server started successfully
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log(`Server is running on port ${port}`);
    }
    Connection();
    cloudinary.config({
        cloud_name: process.env.cloud_name,
        api_key: process.env.api_key,
        api_secret: process.env.api_secret,
        secure: process.env.secure,
    });
});
