import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import User, { UserDocument } from "../models/user.model";
import { verifyJwt } from "../utils/jwt";

interface AuthenticatedRequest extends Request {
  user?: UserDocument;
}

export const protect = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = verifyJwt(token) as JwtPayload;
      const user = await User.findById(decoded.id).select("-password");
      if (user) {
        req.user = user;
      }

      next();
    } catch (error) {
      res.status(401);
      res.send({
        message: "Not authorized, token failed",
      });
    }
  }

  if (!token) {
    res.status(401);
    res.send({
      message: "Not authorized, no token",
    });
  }
};
