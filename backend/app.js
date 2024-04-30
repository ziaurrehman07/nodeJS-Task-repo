import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(
  cors({
    origin: "*",
    Credential: true,
    methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//import routes
import student from "./routes/student.route.js";
import interview from "./routes/interview.route.js";
import user from "./routes/auth.route.js";

//use routes

app.use("/api/v1/studentlist", student);
app.use("/api/v1/interviews", interview);
app.use("/api/v1/user", user);

export { app };
