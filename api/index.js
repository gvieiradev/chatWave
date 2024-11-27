import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import cors from "cors";
import { UserModel } from "./models/User.js";

dotenv.config();
const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongoDB");
    } catch (error) {
        
    }
}
const jwtSecret = process.env.JWT_SECRET;

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))

app.get("/register", async (req, res)=>{
    const {username, email, password} = req.body;
    try {
        const createdUser = await UserModel.create({username, email, password});
        jwt.sign({userId:createdUser, _id}, {}, jwtSecret, (err, token) => {
            if(err) throw err;
            res.cookie("token", token).status(201).json({
                _id:createdUser._id,
            });
        });
    } catch (err) {
        if(err) throw err;
        res.status(500).json("error")
    }
});

app.listen(4000)