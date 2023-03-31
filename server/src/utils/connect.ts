import * as mongoose from "mongoose";
import logger from "./logger";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/kartaca-test";
  //const DB_URI = "mongodb://db:27018/kartaca-test";

  try {
    await mongoose.connect(DB_URI);
    logger.info("DB connected");
  } catch (error) {
    logger.error("Could not connect to DB");
    process.exit(1);
  }
};

export default connectDB;
