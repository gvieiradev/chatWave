import mongoose from "mongoose";

export const dbConnect = async () =>{
    try {
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.n5xce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("DataBase is connected!");
    } catch (error) {
        console.log(error, "DataBase is not connected");
    }
}