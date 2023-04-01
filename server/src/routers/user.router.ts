import {
  authUserHandler,
  createUserHandler,
  getAllUsersHandler,
  getUserHandler,
  getUserTokenHandler,
  removeUserTokenHandle,
} from "./../controllers/user.controller";
import express from "express";

export const userRouter = express.Router();

userRouter.route("/").get(getAllUsersHandler);
userRouter.route("/g-token/:id").get(getUserTokenHandler);
userRouter.route("/d-token/:id").get(removeUserTokenHandle);
userRouter.route("/:id").get(getUserHandler);
userRouter.route("/register").post(createUserHandler);
userRouter.route("/login").post(authUserHandler);
