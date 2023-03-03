const mongoose = require("mongoose");

const ChatRoomSchema = mongoose.Schema(
	{
		name: String,
		members: [mongoose.Types.ObjectId],
		messages: [
			mongoose.Schema({
				sender: mongoose.Types.ObjectId,
				msg: String,
			}),
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("chatRoom", ChatRoomSchema);
