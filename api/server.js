import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

const PORT = 8000;

app.use(express.json());

app.use(cors());
app.use(morgan("tiny"));
//data base connection

import { dbConnection } from "./src/config/db.js";
dbConnection();

//routers

import router from "./src/routers/router.js";

app.use("/", router);

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
