import { Request, Response } from "express";
import { Food } from "../models/index.js";
import { error } from "console";
export const getAllFoods = async (req: Request, res: Response) => {
  try {
    const foods = await Food.find();
    res.json({
      success: true,
      data: foods,
    });
  } catch (error) {
    console.error("Error fetching food:", error);
    res.status(404).json({ success: false, error: "Failed to fetch foods" });
  }
};

export const getFoodById = async (req: Request, res: Response) => {
  try {
    const id = req.params.foodId;
    const foods = await Food.find();
    const selectedFood = foods && foods.find((food) => food.id == id);
    res.json({
      success: true,
      data: selectedFood,
    });
  } catch (error) {
    console.error("Error fetching food", error);
    res.status(404).json({ success: false, error: "Failed to fetch food" });
  }
};

export const createFood = async (req: Request, res: Response) => {
  const { foodName, price, image, ingredients } = req.body;
  try {
    const createdFood = await Food.create({
      foodName: foodName,
      price: price,
      image: image,
      ingredients: ingredients,
      createdAt: new Date(),
    });

    res.json({
      success: true,
      data: createdFood,
    });
  } catch (error) {
    console.error("Error creating food:", error);
    res.status(400).json({ success: false, error: "Failed to create food" });
  }
};

export const updateFood = (req: Request, res: Response) => {
  res.send("food/foodId PATCH request irle");
};

export const deleteFood = async (req: Request, res: Response) => {
  try {
    const id = req.params.foodId;

    const deleteFood = await Food.findByIdAndDelete(id);
    if (!deleteFood) {
      console.error("Error finding food");
      res.status(404).json({ success: false, error: "Failed to find food" });
    }

    res.json({
      success: true,
      deletedData: deleteFood,
    });
  } catch (error) {
    console.error("Error deleting food:", error);
    res.status(400).json({ success: false, error: "Failed to delete food" });
  }
};
