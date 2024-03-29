import React, { useEffect, useState,  } from "react";
import { getOnlineUsers } from "../../utils/globals";
import { socket } from "../Shared/socket/socketConfig";
import { DEFAULT_PROFILE_IMAGE } from "../../utils/constant";
import { Link } from "react-router-dom";
import ChatLayout from "./ChatLayout";
import { getConversationListApi } from "../../services/chat";
import { uniqBy } from "lodash";
// import { io } from "socket.io-client";

//  const socket = io("http://localhost:4000", { autoConnect: false });
const ActiveFriends = () => {
  

  const [onlineUsers, setOnlineUsers] = useState([]);
  const [showUserChat, setShowUserChat] = useState(false);
  const [activeUserId, setActiveUserId] = useState(null);
  const [conversationList, setConversationList] = useState([]);
  let user = JSON.parse(localStorage.getItem("token"));

  const handleActiveUserClick = (userId) => {
    setShowUserChat(true);
    setActiveUserId(userId === activeUserId ? null : userId);
  };

  const getConvertation =async () => {
    const usersList = await getConversationListApi();
    console.log("usersList", usersList);
    setConversationList(usersList);
  }

  useEffect( () => {
    console.log("message");
    socket.emit("addUser", user.id);
    socket?.on("getUsers", (users) => {
      console.log("online users", users);
      setOnlineUsers(users);
    });
    getConvertation()
    // console.log('usersList', usersList)
  }, []);

  let onlineUsers1 = [...onlineUsers, ...conversationList];

  const seenUserIds = {}; // Object to keep track of seen user IDs
  onlineUsers1 = onlineUsers1.filter((item) => {
    // Check if userId is already seen and socketId is not empty
    if (item.userId in seenUserIds) {
      return false; // Skip this item
    }
    if (item.userId === user.id || item.userId in seenUserIds) {
      return false;
  }
    seenUserIds[item.userId] = true; // Mark userId as seen
    return true; // Include this item in filtered data
  });

  return (
    <div>
      <h1 className="font-extrabold text-gray-500">Active Friends</h1>
      {onlineUsers1.map((onlineUser, index) => (
        <div className="p-2  rounded-xl my-2  cursor-pointer" key={index}>
          <div
            className="flex items-center "
            onClick={() => handleActiveUserClick(onlineUser.userId)}
          >
            <div className="flex">
              <img
                src={onlineUser.img || DEFAULT_PROFILE_IMAGE}
                className="h-7 w-7 rounded-full "
              />
              {
                onlineUser.socketId && <p className={`w-2 h-2 bg-green-500 rounded-full ${onlineUser.socketId ? '-m-1': ''}`} />
              }
            </div>

            <h1 className="font-bold mx-2">{onlineUser.name}</h1>
          </div>
          {activeUserId === onlineUser.userId && (
            <ChatLayout receiverUerInfo={onlineUser} senderId={user.id} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ActiveFriends;
