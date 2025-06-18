import { Request, Response } from "express";
export const getAllFoodCategories = (req: Request, res: Response) => {
  res.send("food-category/ GET request irle");
};
export const updateFoodCategory = (req: Request, res: Response) => {
  res.send(" /food-category/:foodCategoryId PATCH request irle");
};

export const createFoodCategory = (req: Request, res: Response) => {
  res.send("food-category/ POST request irle");
};

export const deleteFoodCategory = (req: Request, res: Response) => {
  res.send("food-category/:foodCategoryId DELETE request irle");
};
