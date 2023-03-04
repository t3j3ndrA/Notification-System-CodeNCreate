import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

const ChattingPage = () => {
  const userId = localStorage.getItem("_id");
  const username = localStorage.getItem("username");

  const [chatRoom, setChatRoom] = useState({});
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [key, setKey] = useState(Math.random());

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
    });

    socket.on("new-noti", (notification) => {});

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
    });
  };
  return (
    <>
      <div className="flex flex-col md:h-screen h-[92vh] w-full">
        <header className="bg-pink-500 text-white flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <img
              className="w-10 h-10 object-cover rounded-full mr-4"
              src="https://source.unsplash.com/random/40x40"
              alt="Group Icon"
            />
            <h1 className="font-bold text-xl">{chatRoom?.name}</h1>
          </div>
        </header>
        <main className="flex-1 p-4 overflow-y-scroll" key={key}>
          {chatRoom?.messages?.map(
            ({ username, sender, msg, createdAt }, index) => {
              const dt = new Date(createdAt);
              return (
                <div
                  key={index}
                  className={`${
                    sender == userId ? "text-right" : "text-left"
                  } mb-4`}
                >
                  <p className="font-medium mb-1">{username}</p>
                  <p className="bg-purple-200 rounded-lg py-2 px-3 inline-block">
                    {msg}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {dt.getHours() + ":" + dt.getMinutes()}
                  </p>
                </div>
              );
            }
          )}
        </main>
        <footer className="bg-white px-4 py-3">
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              className="flex-1 border-gray-300 border-2 rounded-lg py-2 px-3 mr-2 focus:outline-none"
              placeholder="Type a message..."
              value={newMessage}
              onChange={handleChange}
            />
            <button
              className="bg-blue-500 text-2xl hover:scale-105 cursor-pointer text-white font-bold py-2 px-4 rounded-lg"
              type="submit"
              disabled={!newMessage}
            >
              <FiSend className="" />
            </button>
          </form>
        </footer>
      </div>
      <ToastContainer onClick={() => {}} />
    </>
  );
};

export default ChattingPage;
