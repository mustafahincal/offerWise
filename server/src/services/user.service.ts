import { signJwt } from "./../utils/jwt";
import { omit } from "lodash";
import { Document } from "mongoose";
import User, { UserInput, UserLoginInput } from "../models/user.model";
import { deleteRedisKey, redisHandler } from "../utils/redis";

export const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users.map((user: Document) => omit(user.toJSON(), "password"));
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getUser = async (id: string) => {
  try {
    const user = await User.findById(id);
    if (user) {
      return omit(user.toJSON(), "password");
    }
  } catch (e: any) {
    throw new Error(e);
  }
};

export const createUser = async (input: UserInput) => {
  try {
    const user = await User.create(input);
    return omit(user.toJSON(), "password");
  } catch (e: any) {
    throw new Error("User creation failed");
  }
};

export const authUser = async (input: UserLoginInput) => {
  const { email, password } = input;
  try {
    const user = await User.findOne({ email });

    if (!user) throw new Error("User not found");

    if (user && (await user.comparePassword(password))) {
      const token = signJwt(user._id);

      await redisHandler(
        `token-user-${user._id}`,
        JSON.stringify({
          token,
          user: {
            _id: user._id,
            email: user.email,
            name: user.name,
          },
        })
      );

      return {
        ...omit(user.toJSON(), "password"),
        token,
      };
    } else {
      throw new Error("Password failed");
    }
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getUserToken = async (userId: string) => {
  try {
    const token = await redisHandler("token-user-" + userId);
    return token;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const removeUserToken = async (userId: string) => {
  try {
    const deletedKey = await deleteRedisKey("token-user-" + userId);
    // console.log(deletedKey);
  } catch (e: any) {
    throw new Error(e.message);
  }
};
