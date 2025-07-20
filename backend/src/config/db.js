import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        if (!ENV.MONGO_URI) {
            throw new Error("MONGO_URI non è definita nelle variabili d'ambiente");
        }
        
        await mongoose.connect(ENV.MONGO_URI);
        console.log("Connected to DB successfully");
    } catch(error) {
        console.log("Error connecting to MONGODB:", error);
        process.exit(1);
    }
};