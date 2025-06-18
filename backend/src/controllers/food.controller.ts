import { Request, Response } from "express";

export const getAllFoods = (req: Request, res: Response) => {
  res.send("food/ GET request irle");
};

export const getFoodById = (req: Request, res: Response) => {
  res.send("food/foodId GET requst irle");
};

export const createFood = (req: Request, res: Response) => {
  res.send("food/ POST request irle");
};

export const updateFood = (req: Request, res: Response) => {
  res.send("food/foodId PATCH request irle");
};

export const deleteFood = (req: Request, res: Response) => {
  res.send("food/foodId DELETE requst irle");
};
