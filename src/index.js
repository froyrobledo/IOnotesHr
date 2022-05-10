import app from "./app";
import { Server as websocketServer } from "socket.io";
import  http  from "http";
import {connectDB} from "./db/db"
import   sockets   from "./socket/sockets";
import  PORT  from "./config/config";
connectDB()
const server = http.createServer(app)
const httpServer = server.listen(PORT);
console.log(`Runnign on Port`, PORT);
const io = new websocketServer(httpServer);
sockets(io)