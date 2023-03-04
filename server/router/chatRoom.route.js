const ChatRoomModel = require("../models/ChatRoom.model");
const NotificationModel = require("../models/Notification.model");
const UserModel = require("../models/User.model");
const socket = require("../utils/serverSocket");
const router = require("express").Router();

// add new user
router.post("/new", async (req, res) => {
	const { name, members } = req.body;
	const newChatRoom = new ChatRoomModel({ name, members });
	const savedChatRoom = await newChatRoom.save();
	return res.json({ success: true, data: savedChatRoom });
});

router.get("/", async (req, res) => {
	const foundRooms = await ChatRoomModel.find({});
	return res.json({ success: true, data: foundRooms });
});

// get chat room info
router.get("/:crId", async (req, res) => {
	const { crId } = req.params;
	const foundRoom = await ChatRoomModel.findOne({ _id: crId });
	return res.json({ success: true, data: foundRoom });
});

// Add message
router.put("/:crId", async (req, res) => {
	const { crId } = req.params;
	const { sender, msg, username } = req.body;
	const updatedChatRoom = await ChatRoomModel.findOneAndUpdate(
		{ _id: crId },
		{
			$push: {
				messages: { sender, msg, username },
			},
		},
		{ new: true }
	);

	const users = await UserModel.find({ _id: { $ne: sender } }, { _id: 1 });
	console.log("rem users >> ", users);
	// add notification to database
	const notificationMsg = `${username} has sent ${msg} to ${updatedChatRoom?.name}`;
	const newNotification = new NotificationModel({
		msg: notificationMsg,
		forUsers: users,
	});
	const savedNotification = await newNotification.save();

	// emit new message
	socket.emit("new-msg", { notificationMsg, username });

	// emit notification
	socket.emit("push-noti", { notificationMsg, username });

	return res.json({ success: true, data: updatedChatRoom });
});

module.exports = router;
