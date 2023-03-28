import { Product } from "@/types/product";
import axios from "./axiosInstance";

export const getAllProducts = () => axios.get("/products");
export const createProduct = (product: Product) =>
  axios.post("/products", product);
export const makeOffer = (id: string, lastOffer: number) =>
  axios.put(`/products/${id}`, { lastOffer });
export const deleteProduct = (id: string) => axios.delete(`/products/${id}`);
