import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import image1 from "../images/dark-bg.jpg";
import image2 from "../images/light-bg.jpg";

import { io } from "socket.io-client";
import { ThemeContext } from "../ThemeContext";
const socket = io("http://localhost:5000");

const ChattingPage = () => {
  const userId = localStorage.getItem("_id");
  const username = localStorage.getItem("username");

  const [chatRoom, setChatRoom] = useState({});
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [key, setKey] = useState(Math.random());
  const navigate = useNavigate();
  const chatRef = useRef(null);

  const fetchChatRoom = async () => {
    axios
      .get(`http://localhost:5000/api/room/6401fb9bfc859f42a023419c`)
      .then(({ data }) => {
        setChatRoom(data.data);
        setKey(Math.random());
      })
      .catch((err) => console.log(err));
  };

  const sendMessage = async () => {
    axios
      .put(`http://localhost:5000/api/room/6401fb9bfc859f42a023419c`, {
        username,
        sender: userId,
        msg: newMessage,
      })
      .then(({ data }) => {
        setChatRoom(data.data);
        setKey(Math.random());
        setNewMessage("");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchChatRoom();

    socket.on("connect", () => {
      console.log("connected");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("new-msg", () => {
      fetchChatRoom();
      chatRef.current.scrollIntoView({ behavior: "smooth" });
    });

    socket.on("new-noti", ({ notificationMsg, username: u }) => {
      console.log(notificationMsg);
      console.log(u);
      if (username != u) showToastMessage(notificationMsg);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("new-noti");
      socket.off("new-msg");
    };
  }, []);

  const [newMessage, setNewMessage] = useState("");

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  const showToastMessage = (msg) => {
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
      onClick: () => {
        navigate("/notifications");
      },
    });
  };
  return (
    <div className="flex flex-col md:h-screen h-[92vh] w-full">
      <header className="bg-blue-500 dark:bg-[#262626] text-white flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img
            className="w-10 h-10 object-cover rounded-full mr-4"
            src="https://source.unsplash.com/random/40x40"
            alt="Group Icon"
          />
          <h1 className="font-bold text-xl">{chatRoom?.name}</h1>
        </div>
      </header>
      <main
        className="flex-1 p-4 overflow-y-auto scrollbar"
        id="style-1"
        key={key}
      >
        {chatRoom?.messages?.map(
          ({ username, sender, msg, createdAt }, index) => {
            const dt = new Date(createdAt);
            return (
              <div
                key={index}
                className={`   rounded ${
                  sender == userId ? "text-right " : "text-left"
                } mb-4`}
              >
                <p className="font-medium mb-1 ml-2 text-gray-600 dark:text-gray-400 ">
                  {username}
                </p>
                <p
                  className={`${
                    sender == userId
                      ? "bg-[#EFEFEF] dark:bg-[#262626] dark:text-white text-[#262626]"
                      : "border-2 dark:border-gray-800  text-black dark:text-white"
                  } rounded-lg py-2 px-5 rounded-3xl inline-block dark:text-black `}
                >
                  {msg}
                </p>
                <p className="text-gray-500 text-sm ml-2">
                  {dt.getHours() + ":" + dt.getMinutes()}
                </p>
              </div>
            );
          }
        )}
      </main>
      <footer className="bg-gray-100 px-4 py-3 dark:bg-[#262626] ">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            className="flex-1 text-black border-gray-300 dark:border-[#fafafa] rounded-lg py-2 px-3 mr-2 focus:outline-none dark:bg-[#262626] dark:text-[#fff] border-2"
            placeholder="Type a message..."
            value={newMessage}
            onChange={handleChange}
          />
          <button
            className="bg-blue-500 text-[#fff]  dark:bg-[#fff] dark:text-black text-2xl hover:scale-105 cursor-pointer font-bold py-2 px-4 rounded-lg"
            type="submit"
            disabled={!newMessage}
          >
            <FiSend className="" />
          </button>
        </form>
      </footer>
    </div>
  );
};

export default ChattingPage;
