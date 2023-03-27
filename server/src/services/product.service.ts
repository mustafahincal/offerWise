import { FilterQuery } from "mongoose";
import Product, {
  ProductDocument,
  ProductInput,
  UpdateProductInput,
} from "../models/product.model";

export const getAllProducts = async () => {
  return await Product.find();
};

export const createProduct = async (input: ProductInput) => {
  return await Product.create(input);
};

export const getProduct = async (id: string) => {
  return await Product.findById(id);
};

export const updateProduct = async (id: string, input: UpdateProductInput) => {
  if (input.lastOffer) {
    input.lastOfferTime = new Date();
  }
  return await Product.findByIdAndUpdate(id, input, { new: true });
};

export const deleteProduct = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};
