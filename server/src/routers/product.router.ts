import express from "express";
import {
  createProductHandler,
  deleteProductHandler,
  getAllProductsHandler,
  getProductHandler,
  updateProductHandler,
} from "../controllers/product.controller";
import { protect } from "../middlewares/auth.middleware";

export const productRouter = express.Router();

productRouter.route("/").get(protect, getAllProductsHandler);
productRouter.route("/:id").get(protect, getProductHandler);
productRouter.route("/").post(protect, createProductHandler);
productRouter.route("/:id").put(protect, updateProductHandler);
productRouter.route("/:id").delete(protect, deleteProductHandler);
