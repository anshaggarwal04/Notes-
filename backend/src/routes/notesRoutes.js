import express from "express";
import {getAllNotes,createNotes,updateNote,deleteNote} from "../controllers/notes.controller.js"
const router =  express.Router();

router.get("/",getAllNotes);

router.post("/",createNotes);

router.put("/:id",updateNote);

router.delete("/:id",deleteNote);

export default router;