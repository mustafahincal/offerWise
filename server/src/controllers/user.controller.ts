import { AuthUserInput, CreateUserInput } from "./../schemas/user.schema";
import { NextFunction, Request, Response } from "express";
import { omit } from "lodash";
import {
  authUser,
  createUser,
  getAllUsers,
  getUser,
  getUserToken,
  removeUserToken,
} from "../services/user.service";
import logger from "../utils/logger";

export const getAllUsersHandler = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    if (users) {
      res.send({ users, success: true });
    } else {
      throw new Error("Failed to Fetch Users");
    }
  } catch (e: any) {
    res.status(400).send({ message: e.message, success: false });
  }
};

export const getUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await getUser(req.params.id);
    if (user) {
      res.send({ user, success: true });
    } else {
      throw new Error("Failed to Fetch User");
    }
  } catch (e: any) {
    res.status(400).send({ message: e.message, success: false });
  }
};

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) => {
  try {
    const user = await createUser(req.body);
    if (user) {
      res.send({ success: true });
    } else {
      throw new Error("Failed to Create a New User");
    }
  } catch (e: any) {
    res.status(400).send({ message: e.message, success: false });
  }
};

export const authUserHandler = async (
  req: Request<{}, {}, AuthUserInput["body"]>,
  res: Response
) => {
  try {
    const user = await authUser(req.body);
    if (user) {
      res.send({ user, success: true });
    } else {
      throw new Error("Failed to Auth the User");
    }
  } catch (e: any) {
    logger.error(e);
    res.send({ message: e.message, success: false });
  }
};

export const getUserTokenHandler = async (req: Request, res: Response) => {
  try {
    const token = await getUserToken(req.params.id);
    if (token) {
      res.send({
        token_user: token,
        success: true,
        message: "Token fetched successfully",
      });
    } else {
      throw new Error("Failed to fetch token");
    }
  } catch (e: any) {
    res.send({ message: e.message, success: false });
  }
};

export const removeUserTokenHandle = async (req: Request, res: Response) => {
  try {
    await removeUserToken(req.params.id);
    res.send({ success: true, message: "Token removed successfully" });
  } catch (e: any) {
    res.send({ message: e.message, success: false });
  }
};
