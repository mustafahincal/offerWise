import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "./../services/product.service";
import { Request, Response } from "express";

export const getAllProductsHandler = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    if (products) {
      res.send({
        message: "Products Fetched Successfully",
        products,
      });
    }
  } catch (e) {
    res.status(400).send({ message: "Products Couldn't Fetched" });
  }
};

export const getProductHandler = async (req: Request, res: Response) => {
  try {
    const product = await getProduct(req.params.id);
    if (product) {
      res.send({
        message: "Product Fetched Successfully",
        product,
      });
    }
  } catch (e) {
    res.status(400).send({ message: "Product Couldn't Fetched" });
  }
};

export const createProductHandler = async (req: Request, res: Response) => {
  try {
    const product = await createProduct(req.body);
    if (product) {
      res.send({
        message: "Product Created Successfully",
        product,
      });
    }
  } catch (e) {
    res.status(400).send({ message: "Product Couldn't Created" });
  }
};

export const updateProductHandler = async (req: Request, res: Response) => {
  try {
    const product = await updateProduct(req.params.id, req.body);
    if (product) {
      res.send({
        message: "Product Updated Successfully",
        product,
      });
    }
  } catch (e) {
    res.status(400).send({ message: "Product Couldn't Updated" });
  }
};

export const deleteProductHandler = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await deleteProduct(req.params.id);
    if (deletedProduct) {
      res.send({
        message: "Product Deleted Successfully",
      });
    } else {
      throw new Error("Product Couldn't Deleted");
    }
  } catch (e: any) {
    res.status(400).send({ message: e.message });
  }
};
