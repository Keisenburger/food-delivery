import mongoose from "mongoose";
const { Schema, model } = mongoose;
const foodSchema = new Schema({
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "FoodCategory",
  },
  createdAt: Date,
  updatedAt: Date,
});

export const Food = model("Food", foodSchema);

// pass = VUdkhPNDzxXy6NwJ
// username = erdembileg0906
