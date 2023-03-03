import axios from "axios";
import { useEffect, useState } from "react";

import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

const Notifications = () => {
	const userId = localStorage.getItem("_id");
	const username = localStorage.getItem("username");
	const [notifications, setNotifications] = useState([]);
	const [key, setKey] = useState(Math.random());
	const [isConnected, setIsConnected] = useState(socket.connected);

	const fetchUsersNotifications = async () => {
		console.log("Fetching for >>", userId);
		axios
			.get(`http://localhost:5000/api/noti/of/${userId}`)
			.then(({ data }) => {
				console.log("resp >>", data);
				setNotifications(data.data);
				setKey(Math.random());
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		fetchUsersNotifications();

		socket.on("connect", () => {
			console.log("connected");
			setIsConnected(true);
		});

		socket.on("disconnect", () => {
			setIsConnected(false);
		});

		socket.on("new-msg", () => {});

		socket.on("new-noti", (notification) => {
			fetchUsersNotifications();
		});

		return () => {
			socket.off("connect");
			socket.off("disconnect");
			socket.off("new-noti");
			socket.off("new-msg");
		};
	}, []);

	console.log(notifications);

	return (
		<>
			<div className="p-4 w-full h-screen">
				<h1 className="text-2xl font-medium">Notifications</h1>
				<div className="h-1 mt-2 mb-4 rounded-full bg-black"></div>
				<div className="flex flex-col  overflow-y-scroll h-[89vh]" key={key}>
					{notifications?.map(({ msg, forUsers }, idx) => {
						return (
							<>
								<NotificationCard
									msg={msg}
									read={forUsers[0].read}
									createdAt={forUsers[0]?.createdAt}
								/>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
};

const NotificationCard = ({ msg, read, createdAt }) => {
	const dt = new Date(createdAt);

	return (
		<>
			<div className="border-b flex space-x-4  p-2">
				<img src="../images/avatar.jpg" className="w-12 h-12 rounded-full " />
				<div>
					{/* <h4 className="font-medium">{read ? "read" : "unread"}</h4> */}
					<p className="text-gray-600 text-sm">
						{dt ? `${dt.getHours()}:${dt.getMinutes()}` : ""}
					</p>
					<h4>{msg}</h4>
				</div>
			</div>
		</>
	);
};

export default Notifications;
