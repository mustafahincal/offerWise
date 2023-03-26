import { signJwt } from "./../utils/jwt";
import { omit } from "lodash";
import { Document } from "mongoose";
import User, { UserInput, UserLoginInput } from "../models/user.model";

export const createUser = async (input: UserInput) => {
  try {
    const user = await User.create(input);
    return omit(user.toJSON(), "password");
  } catch (e: any) {
    throw new Error(e);
  }
};

export const authUser = async (input: UserLoginInput) => {
  const { email, password } = input;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.comparePassword(password))) {
      return {
        ...omit(user.toJSON(), "password"),
        token: signJwt(user._id),
      };
    }
  } catch (e: any) {
    throw new Error(e);
  }
};
