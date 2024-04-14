import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(cookieParser());

export default app;
import {userRouter} from "./routes/user.js"

app.use("/api/v1", userRouter);