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

export const updateProduct = async (
  userId: string,
  id: string,
  input: UpdateProductInput
) => {
  const product = await Product.findById(id);
  if (!product) throw new Error("Product not found");

  if (input.lastOffer) {
    if (input.lastOffer <= product.startPrice)
      throw new Error("Offer must be higher than start price");
    if (product.lastOffer && input.lastOffer <= product.lastOffer)
      throw new Error("Offer must be higher than last offer");
    input.lastOfferTime = new Date();
    input.user = userId;
  }
  return await Product.findByIdAndUpdate(id, input, { new: true });
};

export const deleteProduct = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};
