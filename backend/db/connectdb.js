import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://ziaurrehman939:JJmLYakglZ94bvZK@cluster0.sirqzzt.mongodb.net/"
    );
    console.log(
      `MongoDB connected successfully! DB Host :${connectionInstance.connection.host} `
    );
  } catch (error) {
    console.log("MongoDb connection failed :", error);
    process.exit(1);
  }
};

export default connectdb;
