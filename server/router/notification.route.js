const NotificationModel = require("../models/Notification.model");
// const { io } = require("socket.io-client");

// const socket = io("http://localhost:5000");

const socket = require("../utils/serverSocket");

const router = require("express").Router();

router.post("/new", async (req, res) => {
	const { msg, forUsers } = req.body;
	const newNotification = new NotificationModel({ msg, forUsers });
	const savedNotification = await newNotification.save();
	// console.log("Socket-id in /new >> ", socket.id);
	socket.emit("push-noti", savedNotification);
	return res.json({ success: true, data: savedNotification });
});

// update notifications with userId and notifications ids[]
router.put("/mark-read/:userId", async (req, res) => {
	const { userId } = req.params;
	if (!userId) return res.json({ success: false, msg: "No user id provided" });

	const { notifications } = req.body;

	let promises = notifications.map(async (notiId) => {
		return NotificationModel.findOneAndUpdate(
			{ _id: notiId, "forUsers._id": userId },
			{
				"forUsers.$.read": true,
			}
		);
	});

	Promise.all(promises)
		.then((res) => {
			// console.log(res);
		})
		.then(() => {
			return res.json({ success: true });
		})
		.catch((err) => res.json({ success: false, err }));
});

// get all notifications of user by userId
router.get("/of/:userId", async (req, res) => {
	const { userId } = req.params;

	if (!userId) return res.json({ success: false, msg: "No userId provided" });

	let notifications = await NotificationModel.find(
		{ "forUsers._id": userId },
		{ _id: 1, msg: 1, "forUsers.$": 1 }
	);

	notifications.reverse();

	return res.json({ success: true, data: notifications });
});

module.exports = router;
