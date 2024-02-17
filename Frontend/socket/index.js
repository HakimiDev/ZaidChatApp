import { io } from "socket.io-client";

const ip = "192.168.147.118";
const port = 3000;
const URL = `http://${ip}:${port}/`;
const socket = io(URL);

export default socket;
