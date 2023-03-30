import {
  authUserHandler,
  createUserHandler,
  getAllUsersHandler,
  getUserHandler,
  getUserTokenHandler,
} from "./../controllers/user.controller";
import express from "express";

export const userRouter = express.Router();

userRouter.route("/").get(getAllUsersHandler);
userRouter.route("/token").get(getUserTokenHandler);
userRouter.route("/:id").get(getUserHandler);
userRouter.route("/register").post(createUserHandler);
userRouter.route("/login").post(authUserHandler);
