import express from "express";
import {
  resetPassword,
  refresh,
  resetPasswordReq,
  signIn,
  signUp,
  verifyResetPassword,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.get("/refresh", refresh);
authRouter.post("/sign-in", signIn);
authRouter.post("/sign-up", signUp);
authRouter.post("/reset-password-request", resetPasswordReq);
authRouter.get("/verify-reset-password-request", verifyResetPassword);
authRouter.post("/reset-password", resetPassword);

export default authRouter;
