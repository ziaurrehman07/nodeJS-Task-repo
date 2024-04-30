import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  students: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
});

export const Interview = mongoose.model("Interview", interviewSchema);
