const NotificationModel = require("../models/Notification.model");
const { io } = require("socket.io-client");

const socket = io("http://localhost:5000");

const router = require("express").Router();

router.post("/new", async (req, res) => {
	const { msg, forUsers } = req.body;
	const newNotification = new NotificationModel({ msg, forUsers });
	const savedNotification = await newNotification.save();
	// console.log("Socket-id in /new >> ", socket.id);
	socket.emit("push-noti", savedNotification);
	return res.json({ success: true, data: savedNotification });
});

module.exports = router;
