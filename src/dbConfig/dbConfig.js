import mongoose, { connection } from "mongoose";

export default async function connect(){
    try {
         mongoose.connect(process.env.MONGO_URI)
         
         const connection = mongoose.connection
         connection.on('connected', () =>{
         console.log("Database connected successfully");
         })
         connection.on('error', () =>{
         console.log("your database is not start yed");
         process.exit()
         })
        
    } catch (error) {
        console.log("something went wrong");
    }
}