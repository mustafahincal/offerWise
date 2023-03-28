import { Product } from "@/types/product";
import axios from "./axiosInstance";

export const getAllProducts = () => axios.get("/products");
export const createProduct = (product: Product) =>
  axios.post("/products", product);
