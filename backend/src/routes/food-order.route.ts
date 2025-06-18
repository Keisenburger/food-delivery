import express from "express";

import {
  orderFood,
  getAllFoodOrders,
  getFoodOrderById,
  updateFoodOrder,
} from "../controllers/food-order.controller.js";

const foodOrderRouter = express.Router();

foodOrderRouter.post("/", orderFood);
foodOrderRouter.get("/", getAllFoodOrders);
foodOrderRouter.get("/:foodOrderId", getFoodOrderById);
foodOrderRouter.patch("/:foodOrderId", updateFoodOrder);

export default foodOrderRouter;
