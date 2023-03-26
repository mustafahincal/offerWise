import {
  authUserHandler,
  createUserHandler,
} from "./../controllers/user.controller";
import express from "express";

export const userRouter = express.Router();

userRouter.route("/register").post(createUserHandler);
userRouter.route("/login").post(authUserHandler);
