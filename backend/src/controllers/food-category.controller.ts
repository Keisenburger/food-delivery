import { Request, Response } from "express";
import { FoodCategory } from "../models/index.js";
export const getAllFoodCategories = async (req: Request, res: Response) => {
  try {
    const foodCategories = await FoodCategory.find();
    res.json({
      success: true,
      data: foodCategories,
    });
  } catch (error) {
    console.error("Error fetching categories", error);
    res
      .status(404)
      .json({ success: false, error: "Failed to fetch categories" });
  }
};
export const updateFoodCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;
    const id = req.params.foodCategoryId;
    const updatedCategory = await FoodCategory.findByIdAndUpdate(id, {
      categoryName: categoryName,
      updatedAt: new Date(),
    });
    if (!updatedCategory) {
      console.error("Error fetching category");
      res
        .status(404)
        .json({ success: false, error: "Failed to fetch category" });
    }
    res.json({
      success: true,
      updatedCategory: updatedCategory,
    });
  } catch (error) {
    console.error("Error updating category");
    res
      .status(400)
      .json({ success: false, error: "Failed to update category" });
  }
};

export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;
    console.log(categoryName);

    const createdCategory = await FoodCategory.create({
      categoryName: categoryName,
      createdAt: new Date(),
    });

    res.json({
      success: true,
      data: createdCategory,
    });
  } catch (error) {
    console.error("Error creating food:", error);
    res
      .status(400)
      .json({ success: false, error: "Failed to create category" });
  }
};

export const deleteFoodCategory = async (req: Request, res: Response) => {
  try {
    const id = req.params.categoryId;
    const deletedCategory = await FoodCategory.findByIdAndDelete(id);

    if (!deletedCategory) {
      console.error("Error finding category");
      res
        .status(404)
        .json({ success: false, error: "Failed to find category" });
    }
    res.json({
      success: true,
      deletedCategory: deletedCategory,
    });
  } catch (error) {
    console.error("Error deleting category:", error);
    res
      .status(400)
      .json({ success: false, error: "Failed to delete category" });
  }
};
