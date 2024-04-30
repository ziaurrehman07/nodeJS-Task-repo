import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  batch: String,
  name: String,
  email: String,
  phone: String,
  college: String,
  status: String, //is placed or not
  dsaFinalScore: Number,
  webDFinalScore: Number,
  reactFinalScore: Number,
});

export const Student = mongoose.model("Student", studentSchema);
