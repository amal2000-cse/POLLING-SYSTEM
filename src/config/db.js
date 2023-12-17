import mongoose from "mongoose";

const baseUrl = process.env.MONGODB || "0.0.0.0:27017";
const url = "mongodb+srv://amal:suvarnam123@cluster0.0ywkcio.mongodb.net/?retryWrites=true&w=majority";
export const connectToDb=async()=>{
    try {
            await mongoose.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("MongoDB connected using mongoose");        
        } catch (error) {
            console.log(error);
            
        }

}