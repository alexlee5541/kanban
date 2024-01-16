const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const  { Server } = require("socket.io");
const io = new Server(server);
const PORT = 5000;

app.get('/', (req, res) =>{
    res.send("Hello Alez  @")
});

io.on('connection', (socket) =>{
    console.log("user connected");
});

server.listen(PORT, () => {
    console.log(`server runing on ${PORT}`);
});

