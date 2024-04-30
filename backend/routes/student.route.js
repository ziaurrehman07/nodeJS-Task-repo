import { Router } from "express";
import { createStudent, getStudent } from "../controller/student.controller.js";

const router = Router();

router.route("/all-student").post(createStudent);
router.route("/all-student").get(getStudent);

export default router;
