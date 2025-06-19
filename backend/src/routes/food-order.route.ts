import express from "express";

import {
  createFoodOrder,
  deleteFoodOrder,
  getAllFoodOrders,
  getFoodOrderById,
  updateFoodOrder,
} from "../controllers/food-order.controller.js";

const foodOrderRouter = express.Router();

foodOrderRouter.post("/", createFoodOrder);
foodOrderRouter.get("/", getAllFoodOrders);
foodOrderRouter.get("/:foodOrderId", getFoodOrderById);
foodOrderRouter.patch("/:foodOrderId", updateFoodOrder);
foodOrderRouter.delete("/:foodOrderId", deleteFoodOrder);

export default foodOrderRouter;
