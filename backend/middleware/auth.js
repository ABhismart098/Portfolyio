import {User} from "../Model/datamodel.js"
import jwt from "jsonwebtoken"

export const isAuthenticated = async (req, res, next) => {
    try{

        const {token} = req.cookies;

        if(!token){
            return res.status(400).json({
                sucess: false,
                message:"login to Acess this resource"
            });
        }

        const decode = jwt.verify(token, process.env.jwt_secret);
        const user = await User.findById(decode._id);
        req.user = user;
        next();


    }catch(error){
        return res.status(400).json({
            sucess: false,
            message:error.message
        });

    }
}