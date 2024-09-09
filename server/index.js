import express from "express";
const app = express();

import http from "http";
import { Server } from "socket.io";

import cors from "cors";
app.use(cors());
const io = require("socket.io");

const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});

io.on("connection", (socket) => {
    
})

server.listen(3001, () => {
    console.log("Server Running");
})