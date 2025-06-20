import mongoose from "mongoose";
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
    type: String,
    enum: ["PENDING", "CANCELLED", "DELIVERED"],
    default: "PENDING",
  },
  createdAt: Date,
  updatedAt: Date,
});

export const FoodOrder = model("FoodOrder", foodOrderSchema);
