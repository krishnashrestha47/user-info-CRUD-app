import express from "express";
import { addUser } from "../models/userModel.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const result = await addUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "The user has been registerd",
          result,
        })
      : res.json({
          status: "Error",
          message: "Couldn't register the user",
        });
  } catch (error) {
    let message = error.message;
    if (error.message.includes("duplicate key error collection")) {
      message = "User already exists with this email";
    }
    res.json({
      status: "error",
      message,
    });
  }
});

router.get("/register", (req, res) => {
  console.log("hey");
});

export default router;
