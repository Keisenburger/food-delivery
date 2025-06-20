import { Request, Response } from "express";
import { User } from "../models/index.js";
export const refresh = (req: Request, res: Response) => {
  res.send("auth/refresh GET huselt irle");
};

export const signIn = (req: Request, res: Response) => {
  res.send("auth/sign-in POST huselt irle");
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, phoneNumber, address, password, isVerified } = req.body;
    const user = await User.create({
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: address,
      isVerified: isVerified,
      createdAt: new Date(),
    });

    res.json({
      success: true,
      data: user,
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
