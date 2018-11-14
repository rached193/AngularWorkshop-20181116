"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name) {
        this.name = name;
    }
}
exports.User = User;
class Message {
    constructor(from, content) {
        this.from = from;
        this.content = content;
    }
}
exports.Message = Message;
class ChatMessage extends Message {
    constructor(from, content) {
        super(from, content);
    }
}
exports.ChatMessage = ChatMessage;
const http_1 = require("http");
const express = require("express");
const socketIo = require("socket.io");
class ChatServer {
    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }
    createApp() {
        this.app = express();
    }
    createServer() {
        this.server = http_1.createServer(this.app);
    }
    config() {
        this.port = process.env.PORT || ChatServer.PORT;
    }
    sockets() {
        this.io = socketIo(this.server);
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
        this.io.on('connect', (socket) => {
            console.log('Connected client on port %s.', this.port);
            socket.on('message', (m) => {
                console.log('[server](message): %s', JSON.stringify(m));
                this.io.emit('message', m);
            });
            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }
    getApp() {
        return this.app;
    }
}
ChatServer.PORT = 3000;
exports.ChatServer = ChatServer;
