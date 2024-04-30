import { Student } from "../model/student.model.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";

const createStudent = asyncHandler(async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch {
    res.status(400).json({ message: err.message });
  }
});

const getStudent = asyncHandler(async (req, res) => {
  try {
    const student = await Student.find();
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

export { createStudent, getStudent };
