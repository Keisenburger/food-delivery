import express from "express";
import foodsRouter from "./routes/food.route.js";

const server = express();
const port = 4000;

server.use(express.json());
server.use("/food", foodsRouter);

server.get("/", (req, res) => {
  res.send("Hello");
});
server.listen(port, () => {
  console.log("server asla");
});
