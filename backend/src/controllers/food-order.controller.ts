import { Request, Response } from "express";
import { FoodOrder } from "../models/index.js";
export const createFoodOrder = async (req: Request, res: Response) => {
  try {
    const { foodOrderItems, totalPrice, status } = req.body;
    const newFoodOrder = await FoodOrder.create({
      totalPrice: totalPrice,
      foodOrderItems: foodOrderItems,
      status: status,
      createdAt: new Date(),
    });

    res.json({
      success: true,
      data: newFoodOrder,
    });
  } catch (error) {
    console.error("Error creating food order:", error);
    res
      .status(400)
      .json({ success: false, error: "Failed to create food order" });
  }
};

export const getAllFoodOrders = async (req: Request, res: Response) => {
  try {
    const foodOrders = await FoodOrder.find();
    res.json({
      success: true,
      data: foodOrders,
    });
  } catch (error) {
    console.error("Error fetching food orders:", error);
    res.status(404).json({
      success: false,
      error: "Failed to fetch food orders",
    });
  }
};

export const getFoodOrderById = async (req: Request, res: Response) => {
  try {
    const id = req.params.foodOrderId;
    const foodOrder = await FoodOrder.findById(id);

    res.json({
      success: true,
      data: foodOrder,
    });
  } catch (error) {
    console.error("Error fetching Order:", error);
    res
      .status(404)
      .json({ success: false, error: "Failed to fetch food order" });
  }
};

export const updateFoodOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.foodOrderId;
    const { foodOrderItems, totalPrice, status } = req.body;
    const updatedOrder = await FoodOrder.findByIdAndUpdate(
      id,
      {
        foodOrderItems: foodOrderItems,
        totalPrice: totalPrice,
        status: status,
        updatedAt: new Date(),
      },
      { new: true }
    );
    if (!updatedOrder) {
      console.error("Error finding Order");
      res
        .status(404)
        .json({ success: false, error: "Failed to find food order" });
    }
    res.json({
      success: true,
      data: updatedOrder,
    });
  } catch (error) {
    console.error("Error updating food order:", error);
    res.status(400).json({
      success: false,
      error: "Failed to update order",
    });
  }
};

export const deleteFoodOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.foodOrderId;
    const deletedOrder = await FoodOrder.findByIdAndDelete(id);

    if (!deletedOrder) {
      console.error("Error finding Order");
      res.status(404).json({
        success: false,
        error: "Failed to find order",
      });
    }
    res.json({
      success: true,
      data: deletedOrder,
    });
  } catch (error) {
    console.error("Error deleting Order:", error);
    res.status(400).json({
      success: false,
      error: "Failed to delete Order",
    });
  }
};
