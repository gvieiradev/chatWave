import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./config/mongo.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    // origin:"http://localhost:5173",
    // credentials:true,
}));

app.use(express.json());

dbConnect();
app.listen(PORT,()=>{
    console.log("Server is ready on port ", PORT )
})