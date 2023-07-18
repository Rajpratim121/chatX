const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const pool = require('./db');

const io = new Server(server);
dotenv.config();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port  ${process.env.PORT}`);
});
