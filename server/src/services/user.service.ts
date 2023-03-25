import { Document } from "mongoose";
import User, { UserInput } from "../models/user.model";

export const createUser = async (input: UserInput) => {
  try {
    return await User.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
};
