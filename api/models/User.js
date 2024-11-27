import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
},{timestamps:true});

export const UserModel = mongoose.model("User", UserSchema);