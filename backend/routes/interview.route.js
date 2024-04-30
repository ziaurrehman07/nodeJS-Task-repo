import { Router } from "express";
import {
  createInterview,
  getInterview,
} from "../controller/interviews.controller.js";

const router = Router();

router.route("/all-interview").post(createInterview);
router.route("/all-interview").get(getInterview);

export default router;
