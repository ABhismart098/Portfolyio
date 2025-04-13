import { User } from "../Model/datamodel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config(); // This ensures that process.env variables are loaded

export const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Login to access this resource",
      });
    }

    // Use process.env.JWT_SECRET to verify the token
    const decode = jwt.verify(token, process.env.jwt_secret);

    const user = await User.findById(decode._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user; // Attach the user object to the request
    next(); // Proceed to the next middleware
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
