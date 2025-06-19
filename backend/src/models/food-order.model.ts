import mongoose from "mongoose";
const { Schema, model } = mongoose;
const foodOrderSchema = new Schema({
  //   user: ObjectId,
  totalPrice: Number,
  foodOrderItems: [String],
  status: String,
  createdAt: Date,
  updatedAt: Date,
});

export const FoodOrder = model("FoodOrder", foodOrderSchema);
