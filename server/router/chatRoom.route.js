const ChatRoomModel = require("../models/ChatRoom.model");
const NotificationModel = require("../models/Notification.model");
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
	const { sender, msg } = req.body;
	const updatedChatRoom = await ChatRoomModel.findOneAndUpdate(
		{ _id: crId },
		{
			$push: {
				messages: { sender, msg },
			},
		},
		{ new: true }
	);

	// add notification to database
	const newNotification = new NotificationModel({ msg, forUsers: [] });
	const savedNotification = await newNotification.save();

	// emit new message
	socket.emit("new-msg");

	// emit notification
	socket.emit("push-noti");

	return res.json({ success: true, data: updatedChatRoom });
});

module.exports = router;
