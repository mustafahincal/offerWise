import express from "express";
import config from "config";
import connectDB from "./utils/connect";
import logger from "./utils/logger";
import dotenv from "dotenv";
import cors from "cors";
import { notFound, errorHandler } from "./middlewares/error.middleware";
import { userRouter } from "./routers/user.router";
import { productRouter } from "./routers/product.router";

const app = express();
dotenv.config();

connectDB();

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

const port = config.get<number>("port");
app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);
});
