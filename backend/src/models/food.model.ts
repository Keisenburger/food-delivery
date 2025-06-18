import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const Food = mongoose.model("Food", foodSchema);

export default Food;
