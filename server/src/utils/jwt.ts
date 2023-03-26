import jwt from "jsonwebtoken";
import config from "config";

export const signJwt = (id: string) => {
  return jwt.sign({ id }, config.get<string>("jwt_secret"), {
    expiresIn: "30d",
  });
};

export const verifyJwt = (token: string) => {
  try {
    const decoded = jwt.verify(token, config.get<string>("jwt_secret"));
    return decoded;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
