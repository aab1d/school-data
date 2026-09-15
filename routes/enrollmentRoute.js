import { Router } from "express";
import Enrollment from "../models/Enrollment.js";
import Student from "../models/Student.js";
import Course from "../models/Course.js";

const router = Router();

router.get("/", async (req, res) => {
  const data = await Enrollment.find()
    .populate("studentId")
    .populate("courseId");
  res.json(data);
});

export default router;
