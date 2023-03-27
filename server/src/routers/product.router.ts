import express from "express";
import { protect } from "../middlewares/auth.middleware";

export const productRouter = express.Router();

productRouter.route("/").post(protect, (req, res) => {
  res.send(req.body);
});
