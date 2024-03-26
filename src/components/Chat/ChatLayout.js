// src/components/ChatLayout.js

import React, { useState } from "react";
import Header from "../Shared/Header";

const ChatLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="flex h-screen">
      <div className="w-1/4 relative bg-gray-100 p-4">
        {/* Chat area */}
        <div className="w-3/4 bg-gray-100 p-4">
          {/* Header */}
          <div className="bg-white py-4 px-6 border-b border-gray-300 flex items-center justify-between">
            <h1 className="text-lg font-semibold">Chat Title</h1>
            <button className="text-blue-500" onClick={toggleSidebar}>
              {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
            </button>
          </div>

          {/* Messages */}
          <div className="flex flex-col h-full">
            {/* Individual messages */}
            {/* Add messages here */}
          </div>

          {/* Message input */}
          <div className="p-4 border-t border-gray-300">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full px-4 py-2 rounded-full border border-gray-300"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full ml-2">
              Send
            </button>
          </div>
        </div>

        <div
          className={`w-1/4 bg-gray-200 p-4 ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          {/* User list */}
          <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
            {/* Add more users as needed */}
          </ul>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default ChatLayout;
