import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT = 8000;

//data base connection

import { dbConnection } from "./src/config/db.js";
dbConnection();

app.get("/", (req, res) => {
  return res.json({
    status: "success",
    message: "You have reached the server",
  });
});

app.listen(PORT, (error) => {
  error && console.log("The server couldn't be connected");
  console.log(`"The server is running on http://localhost:${PORT}`);
});
