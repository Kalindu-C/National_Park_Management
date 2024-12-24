import express from "express";
import { homepage } from "../controllers/userControllers.js";



const router = express.Router();

router.get("/", homepage);


export default router;