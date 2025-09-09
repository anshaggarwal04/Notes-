import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();



const app  =express();

connectDB();

app.use("/api/notes",notesRoutes);


app.listen(5001,()=>{
    console.log("sever started at PORT:5001");
});


//mongodb+srv://ansh04aggarwal_db_user:Cg1pWgHO0M1HXj60@cluster0.0milqg8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0