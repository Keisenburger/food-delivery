import mongoose from "mongoose";
import { userRole } from "./enums.js";
const { Schema, model } = mongoose;

const authSchema = new Schema({
  email: String,
  password: String,
  phoneNumber: String,
  address: String,
  role: {
    type: String as () => userRole,
    enum: Object.values(userRole),
    default: userRole.User,
  },
  isVerified: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

export const User = model("Users", authSchema);
