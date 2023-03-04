const UserModel = require("../models/User.model");

const socket = require("../utils/serverSocket");

const router = require("express").Router();

// add new user
router.post("/new", async (req, res) => {
	const { username, email, password } = req.body;
	const newUser = new UserModel({ email, password, username });
	const savedUser = await newUser.save();
	return res.json({ success: true, data: savedUser });
});

// get user informations
router.get("/:userId", async (req, res) => {
	const { userId } = req.params;
	const user = await UserModel.findOne({ _id: userId });
	return res.json({ success: true, data: user });
});

// update profile
router.put("/:userId", async (req, res) => {
	const { userId } = req.params;
	const { username, email, password } = req.body;
	const updatedUser = await UserModel.findOneAndUpdate(
		{ _id: userId },
		{ username, email, password },
		{ new: true }
	);

	return res.json({ success: true, data: updatedUser });
});

module.exports = router;
