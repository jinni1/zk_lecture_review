import express from "express";
import { registerStudent, getStudentList } from "../controllers/studentController.js";

const router = express.Router();

router.post("/register", registerStudent);
router.get("/:lectureId", getStudentList);

export default router;