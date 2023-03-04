import { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io();

const Home = () => {
	const [isConnected, setIsConnected] = useState(socket.connected);

	useEffect(() => {
		socket.on("connect", () => {
			console.log("connected");
			setIsConnected(true);
		});

		socket.on("disconnect", () => {
			setIsConnected(false);
		});

		socket.on("new-noti", (notification) => {
			console.log("new-noti >> ", notification);
			// let notis = notifications;
			// notis.push(notification.msg);
			// setNotifications(notis);
			// setNotisKey(Math.random());
		});

		return () => {
			socket.off("connect");
			socket.off("disconnect");
			socket.off("new-noti");
		};
	}, []);
	return (
		<>
			<div className="w-full dark:text-white">
				<h1 className="">Home page {isConnected}</h1>
			</div>
		</>
	);
};

export default Home;
