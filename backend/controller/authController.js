import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";

const signup = asyncHandler(async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword });
    res.status(201).send("User created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

const signin = asyncHandler(async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).send("Invalid username or password");
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).send("Invalid username or password");
    }
    const token = jwt.sign({ userId: user._id }, "secretkeyhfdbfs", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export { signup, signin };
