import mongoose from "mongoose";
import { OrderStatus } from "./enums.js";
const { Schema, model } = mongoose;
const foodOrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  totalPrice: Number,
  foodOrderItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "Food",
    },
  ],
  status: {
    type: String as () => OrderStatus,
    enum: Object.values(OrderStatus),
    default: OrderStatus.Pending,
  },
  createdAt: Date,
  updatedAt: Date,
});

export const FoodOrder = model("FoodOrder", foodOrderSchema);
