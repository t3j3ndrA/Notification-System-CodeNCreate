const mongoose = require("mongoose");

const ChatRoomSchema = mongoose.Schema(
	{
		name: String,
		members: [mongoose.Types.ObjectId],
		messages: [
			mongoose.Schema(
				{
					username: String,
					sender: mongoose.Types.ObjectId,
					msg: String,
				},
				{ timestamps: true }
			),
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("chatRoom", ChatRoomSchema);
