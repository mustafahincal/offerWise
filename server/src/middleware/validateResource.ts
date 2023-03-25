import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validate = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
    } catch (error: any) {
      return res.status(400).json({
        message: error.errors,
      });
    }
  };
};

export default validate;
