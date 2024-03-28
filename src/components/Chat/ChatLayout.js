// src/components/ChatLayout.js

import React, { useEffect, useState } from "react";
import Header from "../Shared/Header";
import { socket } from "../Shared/socket/socketConfig";
import { getMessagesApi, sendMessageApi } from "../../services/chat";

const ChatLayout = ({ receiverUerInfo, senderId }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [currentChat, setCurrentChat] = useState(receiverUerInfo);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // const sendMessage = async ({ senderId, receiverId, content }) => {
  //   await sendMessageApi({ senderId, receiverId, content });
  // };

  const getMessages = async ({ senderId, receiverId }) => {
    const messageList = await getMessagesApi({ senderId, receiverId });
    console.log("messageList", messageList);
    setMessages(messageList);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim().length === 0) return;

    socket.emit("sendMessage", {
      senderId: senderId,
      receiverId: receiverUerInfo.userId,
      content: inputValue.trim(),
    });
    // await sendMessage({senderId: senderId,  receiverId: receiverUerInfo.userId, content: inputValue.trim()})
    setArrivalMessage({
      sender: {id: senderId},
      content: inputValue.trim(),
      receiver:{id: receiverUerInfo.userId},
      // createdAt: Date.now(),
    });
    setInputValue("");
  };

  useEffect(() => {
    socket.on("getMessage", (data) => {
      setArrivalMessage({
        sender: {id: data.senderId},
        content: data.content,
        receiver:{id: data.receiverId},
        // createdAt: Date.now(),
      });
    });

    getMessages({ senderId, receiverId: receiverUerInfo.userId });
  }, []);

  useEffect(() => {
    arrivalMessage && 
    setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  return (
    <div className="flex flex-col h-full">
      {/* Chat header */}
      <div className=" text-white py-2 px-4 flex items-center justify-between rounded-lg">
        <div className="flex items-center">
          {/* <img
            src={receiverUerInfo.img}
            alt="Profile"
            className="h-8 w-8 rounded-full mr-2"
          /> */}
          {/* <h1 className="font-semibold">{receiverUerInfo.name}</h1> */}
        </div>
        <div>
          <button className="text-white focus:outline-none">
            <i className="fas fa-phone"></i>
          </button>
          <button className="text-white focus:outline-none ml-2">
            <i className="fas fa-video"></i>
          </button>
          <button className="text-white focus:outline-none ml-2">
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div className="flex flex-col" key={index}>
            {/* Sender's message */}
            {message.receiver.id === senderId  ? (
              <div className="flex items-center mb-2">
                <div className="bg-gray-200 p-2 rounded-xl max-w-3/4">
                  <p>{message.content}</p>
                </div>
              </div>
            ) : (
              <div className="flex justify-end items-center mb-2">
                <div className="bg-blue-500 text-white p-2 rounded-xl max-w-3/4">
                  <p>{message.content}</p>
                </div>
              </div>
            )}

            {/* Receiver's message */}
            {/* {message.receiver.id === receiverUerInfo.userId && <div className="flex justify-end items-center mb-2">
              <div className="bg-blue-500 text-white p-2 rounded-xl max-w-3/4">
                <p>{ message.content}</p>
              </div>
            </div>} */}

            {/* Add more messages as needed */}
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="bg-gray-200 flex items-center p-2 rounded-lg">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-transparent border-none focus:outline-none"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button className="text-blue-500 -ml-5" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatLayout;
