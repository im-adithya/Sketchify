var express = require("express");
var socket = require('socket.io');

var app = express();
var server = app.listen(8000);

var io = socket(server);

console.log("My socket server is listening");

io.sockets.on("connection", newConnection);

function newConnection(socket) {
    console.log(socket.id);
}