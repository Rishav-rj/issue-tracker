import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB connected!");
    }catch(err){
        console.log("Mongoose Error", err);
    }
}

export default connectDB;