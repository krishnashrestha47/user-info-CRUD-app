import express from "express";
import {
  addUser,
  deleteUser,
  getSingleUser,
  getUser,
  updateUser,
} from "../models/userModel.js";

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

router.get("/:_id?", async (req, res) => {
  try {
    const { _id } = req.params;
    console.log(_id);
    const result = _id ? await getSingleUser(_id) : await getUser();
    console.log(result);
    res.json({
      status: "success",
      message: "return from get method",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.patch("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const obj = req.body;
    console.log(obj);
    const result = await updateUser(_id, obj);
    console.log(result);
    res.json({
      status: "success",
      message: "The user details has been updated",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await deleteUser(_id);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "The user has been deleted",
          result,
        })
      : res.json({
          status: "error",
          message: "couldn't delete the user",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
