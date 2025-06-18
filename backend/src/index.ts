import express from "express";
import foodsRouter from "./routes/food.route.js";
import foodcategoryRouter from "./routes/food-category.route.js";
import authRouter from "./routes/auth.route.js";
import foodOrderRouter from "./routes/food-order.route.js";
const server = express();
const port = 4000;

server.use(express.json());
server.use("/food", foodsRouter);
server.use("/food-category", foodcategoryRouter);
server.use("/auth", authRouter);
server.use("/food-order", foodOrderRouter);

server.get("/", (req, res) => {
  res.send("Hello");
});
server.listen(port, () => {
  console.log("server asla");
});
