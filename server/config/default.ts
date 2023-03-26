import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  dbUri: "mongodb://localhost:27017/kartaca",
  saltWorkFactor: 10,
  jwt_secret: process.env.JWT_SECRET,
};
