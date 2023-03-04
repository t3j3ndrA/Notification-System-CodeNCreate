const { io } = require("socket.io-client");
const env = require("dotenv");
env.config();

const socket = io();

module.exports = socket;
