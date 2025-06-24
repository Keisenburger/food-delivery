import { Request, Response } from "express";
import { User } from "../models/index.js";
import bcrypt from "bcrypt";

export const refresh = (req: Request, res: Response) => {
  res.send("auth/refresh GET huselt irle");
};

export const signIn = (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = User.findOne(email);

    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        res.status(200).json({
          success: true,
          message: "Authenticated",
        });
      } else {
        res.status(200).json({
          success: false,
          message: "not authenticated",
        });
      }
    });
  } catch (error) {
    console.error("Failed to create user:", error);
    res.status(400).json({ success: false, error: "Failed to create user" });
  }
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, phoneNumber, address, password } = req.body;

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    bcrypt.hash(password, salt, async (_error, hash) => {
      const user = await User.create({
        email: email,
        password: hash,
        phoneNumber: phoneNumber,
        address: address,
        isVerified: false,
        createdAt: new Date(),
      });
      res.json({
        success: true,
        data: user,
      });
    });
  } catch (error) {
    console.error("Failed to create user:", error);
    res.status(400).json({ success: false, error: "Failed to create user" });
  }
};

export const resetPasswordReq = (req: Request, res: Response) => {
  res.send("auth/reset-password-request POST huselt irle");
};

export const verifyResetPassword = (req: Request, res: Response) => {
  res.send("/auth/verify-reset-password-request GET huselt irle");
};

export const resetPassword = (req: Request, res: Response) => {
  res.send("/auth/reset-password POST huselt irle");
};
