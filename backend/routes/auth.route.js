import { Router } from "express";
import { signin, signup } from "../controller/authController.js";

const router = Router();

router.route("/signin").post(signin);
router.route("/signup").post(signup);

export default router;
