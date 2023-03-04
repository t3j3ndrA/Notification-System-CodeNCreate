const UserModel = require("../models/User.model");
const router = require("express").Router();

// Login
router.post("/login", async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password)
		return res.json({
			success: false,
			msg: "Username & Passwords cannot be empty",
		});

	const foundUser = await UserModel.findOne({ username, password });
	if (!foundUser) return res.json({ success: false, msg: "No user found" });

	return res.json({ success: true, data: foundUser });
});

module.exports = router;
