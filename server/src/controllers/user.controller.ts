import { AuthUserInput, CreateUserInput } from "./../schemas/user.schema";
import { NextFunction, Request, Response } from "express";
import { omit } from "lodash";
import { authUser, createUser } from "../services/user.service";
import logger from "../utils/logger";

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) => {
  try {
    const user = await createUser(req.body);
    if (user) {
      res.send(user);
    } else {
      throw new Error("Failed to Create a New User");
    }
  } catch (e: any) {
    res.status(400).send({ message: e.message });
  }
};

export const authUserHandler = async (
  req: Request<{}, {}, AuthUserInput["body"]>,
  res: Response
) => {
  try {
    const user = await authUser(req.body);
    if (user) {
      res.send(user);
    } else {
      throw new Error("Failed to Auth the User");
    }
  } catch (e: any) {
    logger.error(e);
    res.status(400).send({ message: e.message });
  }
};
