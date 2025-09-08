import express from "express"
import notesroutes from "./routes/notesroutes.js"


const app  =express();

app.get("/api/notes",(req,res)=>{
    //send the node
    res.status(200).send("you got 8 notes");
});

app.post("/api/notes",(req,res)=>{
    //create the node
    res.status(201).json({message:"post created successfully"})
});
app.put("/api/notes",(req,res)=>{
    //create the node
    res.status(202).json({message:"post updated succcessfully"})
});
app.delete("/api/notes",(req,res)=>{
    //create the node
    res.status(203).json({message:"post deleted succcessfully"})
});




app.listen(5001,()=>{
    console.log("sever started at PORT:5001");
});
