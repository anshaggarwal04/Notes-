import express from "express";
import { getAllNotes,getNoteById, createNotes, updateNote, deleteNote} from "../controllers/notesController.js";
const router =  express.Router();

router.get("/",getAllNotes);

router.get("/:id",getNoteById);

router.post("/",createNotes);

router.put("/:id",updateNote);

router.delete("/:id",deleteNote);

export default router;