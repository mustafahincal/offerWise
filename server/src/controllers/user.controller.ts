import { CreateUserInput } from "./../schemas/user.schema";
import { Request, Response } from "express";
import { omit } from "lodash";
import { createUser } from "../services/user.service";
import logger from "../utils/logger";

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) => {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
  } catch (e: any) {
    logger.error(e);
    res.status(409).send(e.message);
  }
};
