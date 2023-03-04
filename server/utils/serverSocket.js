const { io } = require("socket.io-client");
const socket = io("http://localhost:5000");

module.exports = socket;
