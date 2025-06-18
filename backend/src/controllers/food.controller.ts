import { Request, Response } from "express";
import Food from "../models/food.model.js";

export const getAllFoods = async (req: Request, res: Response) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    console.error("Error fetching foods:", error);
    res.status(500).json({ error: "Failed to fetch foods" });
  }
};

export const getFoodById = (req: Request, res: Response) => {
  try {
    const foodId = req.params.foodId;
    res.send(`food/foodId GET request for food with ID: ${foodId}`);
  } catch (error) {
    console.error("Error fetching food by ID:", error);
    res.status(500).json({ error: "Failed to fetch food" });
  }
};

export const createFood = async (req: Request, res: Response) => {
  const { title, description, price } = req.body;
  try {
    const food = new Food({
      title,
      description,
      price,
    });
    await food.save();
    res.status(201).json(food);
  } catch (error) {
    console.error("Error creating food:", error);
    res.status(500).json({ error: "Failed to create food" });
  }
};

export const updateFood = (req: Request, res: Response) => {
  res.send("food/foodId PATCH request irle");
};

export const deleteFood = (req: Request, res: Response) => {
  res.send("food/foodId DELETE requst irle");
};
