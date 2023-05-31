


import mongoose from "mongoose";
import dotenv from 'dotenv';

import { dbUsername,dbpassword } from "../config/index.js";
dotenv.config()

const connectToDatabase =async()=>{

    try {
        const dbURI = `mongodb+srv://${dbUsername}:${dbpassword }@todoslist.qa8oztr.mongodb.net/TODOSLIST?retryWrites=true&w=majority`
        await mongoose.connect(dbURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

    console.log('Connected to MongoDB');


    } catch (error) {
        console.log(error);
    }
}

export default connectToDatabase;