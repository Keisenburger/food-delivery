import mongoose from "mongoose";
const { Schema, model } = mongoose;

const authSchema = new Schema({
  email: String,
  password: String,
  phoneNumber: String,
  address: String,
  role: {
    type: String,
    enum: ["User", "Admin"],
    default: "User",
  },
  isVerified: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

export const User = model("Users", authSchema);
