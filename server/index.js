const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const connectDB = require("./utils/connectDB");
const app = express();

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);

// routes

const NotificationRoute = require("./router/notification.route");
const UserRoute = require("./router/user.route");
const AuthRoute = require("./router/auth.route");
const ChatRoomRoute = require("./router/chatRoom.route");

const io = new Server(httpServer, {
	cors: { origin: "*" },
});

// enviorment varibale configuration before using them in the code
env.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// health check API
app.get("/api", (req, res) => {
	res.json({ msg: "server is up and running!" });
});

// middlewares

app.use("/api/noti", NotificationRoute);
app.use("/api/user", UserRoute);
app.use("/api/auth", AuthRoute);
app.use("/api/room", ChatRoomRoute);

// socket
io.on("connection", (socket) => {
	console.log(`⚡: ${socket.id} user just connected!`);

	// on connection join all the connected users to my-room for notifications
	socket.join("my-room");

	socket.on("push-noti", (notification) => {
		// const rooms = notification.forUsers.map((user) => user._id);
		// console.log("Sending notifications to : ", rooms);
		// socket.to(rooms).emit("new-noti", notification);
		console.log("socke.on(push-noti)");
		socket.to("my-room").emit("new-noti", notification);
	});

	socket.on("new-msg", () => {
		console.log("socke.on(new-msg)");
		socket.to("my-room").emit("new-msg", "Fetch messages");
	});

	socket.on("disconnect", () => {
		console.log(` X : ${socket.id} user just disconnected!`);
		socket.disconnect();
	});
});

// db connections
connectDB();

// starting server
const port = process.env.PORT || 5000;

httpServer.listen(port, () => {
	console.log("listening on port  : " + port);
});
