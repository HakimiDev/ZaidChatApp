import dotenv from "dotenv";
dotenv.config();

import express, { json, urlencoded } from "express";
import cors from "cors";
import { Server } from "socket.io";
import socketHandler from "./src/socket/index.js";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.set("json spaces", 2);
app.use(
  cors({
    origin: "*",
  })
);

app.all("*", (_, res) => res.sendStatus(404));

const server = app.listen(process.env.PORT, () =>
  console.log(`App is online with port ${server.address().port}`)
);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
  perMessageDeflate: false, // Disable compression
});

socketHandler(io);
