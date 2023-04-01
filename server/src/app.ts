import express from "express";
import connectDB from "./utils/connect";
import logger from "./utils/logger";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
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
app.use("/api/test", (req, res) => {
  res.send("test basarili");
});

const port = process.env.PORT || 4000;
const server = http.createServer(app);

server.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);
});

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.CLIENT_URL,
  },
});

io.on("connection", (socket) => {
  //console.log("connected");

  socket.on("setup", (userId) => {
    socket.join(userId);
    socket.emit("connected");
  });

  socket.on("join-trade", (room) => {
    socket.join(room);
    //console.log("user joined room : " + room);
  });

  socket.on("offer-made", (product) => {
    io.emit("offer-received", product);
  });
});
