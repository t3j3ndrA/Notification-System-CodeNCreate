const mongoose = require("mongoose");

const NotificationSchema = mongoose.Schema(
	{
		msg: String,
		// array of all users for which notification is sent
		forUsers: [
			mongoose.Schema(
				{
					// user id
					_id: mongoose.Types.ObjectId,
					read: { type: Boolean, default: false },
					readAt: { type: Date },
				},
				{ timestamps: true }
			),
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("notifications", NotificationSchema);
