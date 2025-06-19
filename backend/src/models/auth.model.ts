import mongoose from "mongoose";
const { Schema, model } = mongoose;

const authSchema = new Schema({
  email: String,
  password: String,
  phoneNumber: String,
  address: String,
  role: String,
  isVerifies: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

export const Auth = model("Auth", authSchema);
