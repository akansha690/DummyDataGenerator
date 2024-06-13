import mongoose from "mongoose";

let mySchema = new mongoose.Schema({
    name: String,
    salary:Number,
    language:String,
    city:String,
    isManager:Boolean
})

export const employee=mongoose.model('employee', mySchema)