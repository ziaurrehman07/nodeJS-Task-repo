import { Interview } from "../model/inerviews.model.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";

const createInterview = asyncHandler(async (req, res) => {
  try {
    const newInterview = await Interview.create(req.body);
    res.status(201).json(newInterview);
  } catch {
    res.status(400).json({ message: err.message });
  }
});

const getInterview = asyncHandler(async (req, res) => {
  try {
    const interview = await Interview.find();
    res.status(200).json(interview);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

export { createInterview, getInterview };
