import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {
  foodsRouter,
  foodCategoryRouter,
  authRouter,
  foodOrderRouter,
} from "./routes/index.js";

mongoose.connect(
  "mongodb+srv://erdembileg0906:VUdkhPNDzxXy6NwJ@cluster0.s03re9s.mongodb.net/food-delivery"
);

const server = express();
const port = 4000;

server.use(cors());
server.use(express.json());

server.use("/food", foodsRouter);
server.use("/food-category", foodCategoryRouter);
server.use("/auth", authRouter);
server.use("/food-order", foodOrderRouter);

server.get("/", (_req, res) => {
  res.send("Hello");
});

server.listen(port, () => {
  console.log("server asla");
});
