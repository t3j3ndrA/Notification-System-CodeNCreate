const { io } = require("socket.io-client");
const env = require("dotenv");
env.config();

const socket = io("https://noti-sys-cnc.onrender.com");

module.exports = socket;
