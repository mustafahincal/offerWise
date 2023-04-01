import * as mongoose from "mongoose";
import logger from "./logger";
import dotenv from "dotenv";
import Product from "../models/product.model";
dotenv.config();

const connectDB = async () => {
  const DB_URI = process.env.DB_URI || "mongodb://mongodb:27017/kartaca";

  try {
    mongoose
      .connect(DB_URI)
      .then(async () => {
        try {
          const product_1 = {
            title: "title 1",
            description: "desc 1",
            startPrice: 100,
            image:
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          };
          const product_2 = {
            title: "title 2",
            description: "desc 2",
            startPrice: 200,
            image:
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80",
          };
          const product_3 = {
            title: "title 3",
            description: "desc 3",
            startPrice: 300,
            image:
              "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
          };

          const products = [product_1, product_2, product_3];

          for (let i = 0; i < products.length; i++) {
            const existingProduct = await Product.findOne({
              title: products[i].title,
            });
            if (existingProduct) continue;

            const newProduct = new Product(products[i]);
            await newProduct.save();
          }

          console.log("Default products inserted successfully!");
        } catch (err) {
          console.error(err);
        }
      })
      .catch((err) => {
        console.error(err);
      });

    logger.info("DB connected");
  } catch (error) {
    logger.error("DB did not connect  ");
    process.exit(1);
  }
};

export default connectDB;
