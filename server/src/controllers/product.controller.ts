import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "./../services/product.service";
import { Request, Response } from "express";
import { UserDocument } from "../models/user.model";

interface ProductRequest extends Request {
  user: UserDocument;
}

export const getAllProductsHandler = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    if (products) {
      res.send({
        message: "Products Fetched Successfully",
        success: true,
        products,
      });
    }
  } catch (e) {
    res
      .status(400)
      .send({ message: "Products Couldn't Fetched", success: false });
  }
};

export const getProductHandler = async (req: Request, res: Response) => {
  try {
    const product = await getProduct(req.params.id);
    if (product) {
      res.send({
        message: "Product Fetched Successfully",
        success: true,
        product,
      });
    } else {
      throw new Error("Product Not Found");
    }
  } catch (e: any) {
    res.status(400).send({ message: e.message, success: false });
  }
};

export const createProductHandler = async (req: Request, res: Response) => {
  try {
    const product = await createProduct(req.body);
    if (product) {
      res.send({
        message: "Product Created Successfully",
        success: true,
        product,
      });
    } else {
      throw new Error("Product Couldn't Created");
    }
  } catch (e: any) {
    res.status(400).send({ message: e.message, success: false });
  }
};

export const updateProductHandler = async (
  req: ProductRequest,
  res: Response
) => {
  try {
    const product = await updateProduct(req.user._id, req.params.id, req.body);
    if (product) {
      res.send({
        message: "Product Updated Successfully",
        success: true,
        product,
      });
    }
  } catch (e: any) {
    res.status(400).send({ success: false, error: e.message });
  }
};

export const deleteProductHandler = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await deleteProduct(req.params.id);
    if (deletedProduct) {
      res.send({
        message: "Product Deleted Successfully",
        success: true,
      });
    } else {
      throw new Error("Product Couldn't Deleted");
    }
  } catch (e: any) {
    res.status(400).send({ message: e.message, success: false });
  }
};
