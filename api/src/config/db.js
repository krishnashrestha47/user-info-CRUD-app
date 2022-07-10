import mongoose from "mongoose";

export const dbConnection = () => {
  try {
    const connectionString = "mongodb://localhost:27017/crud_app";
    const connect = mongoose.connect(connectionString);

    connect && console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
