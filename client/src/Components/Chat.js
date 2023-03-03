import React, { useState } from "react";

const ChattingPage = () => {
  const [messages, setMessages] = useState([
    {
      username: "Alice",
      message: "Hi there!",
      time: "12:00 PM",
    },
    {
      username: "Bob",
      message: "Hey!",
      time: "12:01 PM",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMsg = {
      username: "Alice",
      message: newMessage,
      time: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-pink-500 text-white flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img
            className="w-10 h-10 object-cover rounded-full mr-4"
            src="https://source.unsplash.com/random/40x40"
            alt="Group Icon"
          />
          <h1 className="font-bold text-xl">Group Name</h1>
        </div>
      </header>
      <main className="flex-1 p-4 overflow-y-scroll">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${
              msg.username === "Alice" ? "text-left" : "text-right"
            } mb-4`}
          >
            <p className="font-medium mb-1">{msg.username}</p>
            <p className="bg-purple-200 rounded-lg py-2 px-3 inline-block">
              {msg.message}
            </p>
            <p className="text-gray-600 text-sm">{msg.time}</p>
          </div>
        ))}
      </main>
      <footer className="bg-white px-4 py-3">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            className="flex-1 border-gray-300 border-2 rounded-full py-2 px-3 mr-2 focus:outline-none"
            placeholder="Type a message..."
            value={newMessage}
            onChange={handleChange}
          />
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
            type="submit"
            disabled={!newMessage}
          >
            Send
          </button>
        </form>
      </footer>
    </div>
  );
};

export default ChattingPage;