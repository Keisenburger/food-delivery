import { Request, Response } from "express";

export const refresh = (req: Request, res: Response) => {
  res.send("auth/refresh GET huselt irle");
};

export const signIn = (req: Request, res: Response) => {
  res.send("auth/sign-in POST huselt irle");
};

export const signUp = (req: Request, res: Response) => {
  res.send("auth/sign-up POST huselt irle");
};

export const resetPassword = (req: Request, res: Response) => {
  res.send("auth/reset-password-request POST huselt irle");
};

export const verifyResetPassword = (req: Request, res: Response) => {
  res.send("/auth/verify-reset-password-request GET huselt irle");
};

export const getResetPassword = (req: Request, res: Response) => {
  res.send("/auth/reset-password POST huselt irle");
};
