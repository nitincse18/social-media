import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Header from "./Header";
import { socket } from "./socket/socketConfig";

const SystemMessage = {
  id: 1,
  body: "Welcome to the Nest Chat app",
  author: "Bot",
};

// Create a new socket instance with localhost URL


const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([SystemMessage]);
  const [currentUser, setCurrentUser] = useState(null);
  const user = localStorage.getItem('token');

  
  const onLogout = () => {
    setCurrentUser(null);
  };

  useEffect(() => {
    setCurrentUser(user)
    // Listen to chat event messages
    socket.on("chat", (newMessage) => {
      console.log("New message added", newMessage);
      const msg = {author:newMessage.body}
      setMessages((previousMessages) => [...previousMessages, newMessage]);
    });

    // Remove all event listeners
    return () => {
    //   socket.off("connect");
    //   socket.off("disconnect");
      socket.off("chat");
    };
  }, []);

  const handleSendMessage = (e) => {
    if (e.key !== "Enter" || inputValue.trim().length === 0) return;
    console.log('inputValue', inputValue)
    // Send a message to the server
    socket.emit("chat", { author: currentUser, body: inputValue.trim() });
    setInputValue("");
  };

  const handleLogout = () => {
    socket.disconnect(); // Disconnect when we do logout
    onLogout();
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col h-auto w-2/3 border border-teal-200 m-2">
        <div className="flex justify-between items-center font-medium bg-blue-300">
          <span className="text-neutral-800">Nest Chat App</span>
          {/* <button className="button" onClick={handleLogout}>
            Logout
          </button> */}
        </div>
        <div className="flex flex-col h-2/5 w-auto overflow-auto text-black/50 px-3 py-2">
          {messages.map((message, idx) => (
            <div
              key={idx}
              className={`flex justify-end ${
                1 ? "self-end" : "self-start"
              }`}
            >
              <div
                className={`${
                  1 ? "bg-blue-500 rounded-l-full" : "bg-blue-200 rounded-r-full"
                } p-2`}
              >
                {/* <span className="font-semibold">{currentUser.first_name}</span> */}
                <span className="break-all block">{message.body}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center border-t border-gray-300 px-4 py-2">
          <input
            className="flex-grow px-2 py-1 rounded-full bg-gray-100 focus:outline-none"
            placeholder="Type message here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleSendMessage}
          />
          <button className="ml-2 bg-blue-500 px-3 py-1 text-white rounded-md" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
