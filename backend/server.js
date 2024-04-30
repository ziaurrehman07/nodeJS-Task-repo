import dotenv from "dotenv";
import mongoose from "mongoose";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 5000;

//connect db
mongoose
  .connect(
    "mongodb+srv://ziaurrehman939:JJmLYakglZ94bvZK@cluster0.sirqzzt.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
