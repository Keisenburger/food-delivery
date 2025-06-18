import { Request, Response } from "express";

export const orderFood = (req: Request, res: Response) => {
  res.send("food-order/ POST request irle");
};

export const getAllFoodOrders = (req: Request, res: Response) => {
  res.send("food-order/ GET request irle");
};

export const getFoodOrderById = (req: Request, res: Response) => {
  res.send("food-order/:foodOrderId GET request irle");
};

export const updateFoodOrder = (req: Request, res: Response) => {
  res.send("food-order/:foodOrderId PATCH request irle");
};
