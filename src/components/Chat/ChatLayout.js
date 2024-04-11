// src/components/ChatLayout.js

import React, { useEffect, useState, useRef } from "react";
import { socket } from "../Shared/socket/socketConfig";
import { getMessagesApi, sendMessageApi } from "../../services/chat";
import SendIcon from "@material-ui/icons/Send";

const ChatLayout = ({ receiverUerInfo, senderId }) => {
  const mainDivRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [currentChat, setCurrentChat] = useState(receiverUerInfo);

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
      timeago: 'Just now',
      newMsgCount: 0
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    socket.on("getMessage", (data) => {
      setArrivalMessage({
        sender: {id: data.senderId},
        content: data.content,
        receiver:{id: data.receiverId},
        timeago: 'Just now',
        newMsgCount: 0
      });
    });

    getMessages({ senderId, receiverId: receiverUerInfo.userId });
  }, []);

  useEffect(() => {
    arrivalMessage && 
    setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    if (mainDivRef.current) {
      mainDivRef.current.scrollTop = mainDivRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div 
    className="flex flex-col h-72">
      {/* Chat header */}
      <div className=" text-white py-2 px-4 flex items-center justify-between rounded-lg">
        <div className="flex items-center">
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
      <div className="flex-1 overflow-y-auto p-4 " ref={mainDivRef}>
        {messages.map((message, index) => (
          <div className="flex flex-col my-2" key={index}>
            {/* Sender's message */}
            {message.receiver.id === senderId  ? (
              <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="bg-gray-200 p-2 rounded-xl max-w-3/4">
                  <p>{message.content}</p>
                </div>
              </div>
              <p className="flex justify-start -my-1 text-xs">{message.timeago}</p>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="flex justify-end items-center mb-2">
                <div className="flex flex-col bg-blue-500 text-white p-1 rounded-xl max-w-3/4">
                  <p>{message.content}</p>                  
                </div>
                </div>
                <p className="flex justify-end -my-1 text-xs">{message.timeago}</p>
              </div>
              
            )}
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="bg-gray-200 flex items-center p-2 rounded-lg my-2 inputWithButton relative">
        <input
          type="text"
          placeholder="Type a message..."
          className="p-2 border-2 w-full rounded-xl"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          value={inputValue}
          onClick={(e) => e.stopPropagation()}
        />
        {/* <button className="text-blue-500 -ml-5" onClick={handleSendMessage}  >
          Send
        </button> */}
        <button 
        className="absolute right-0 top-2  text-blue-500 px-4 -py-2 rounded h-8 mt-1"
        onClick={(e) => {
          e.stopPropagation(); // Prevent event propagation
          handleSendMessage();
        }}
        >
          <SendIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default ChatLayout;
