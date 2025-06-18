import express from "express";

import {
  getAllFoodCategories,
  updateFoodCategory,
  createFoodCategory,
  deleteFoodCategory,
} from "../controllers/food-category.controller.js";

const foodCategoryRouter = express.Router();

foodCategoryRouter.get("/", getAllFoodCategories);
foodCategoryRouter.post("/", createFoodCategory);
foodCategoryRouter.patch("/:foodCategoryId", updateFoodCategory);
foodCategoryRouter.delete("/:foodCategoryId", deleteFoodCategory);

export default foodCategoryRouter;
