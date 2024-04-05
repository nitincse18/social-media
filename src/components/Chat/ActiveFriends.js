import React, { useState } from "react";
import { DEFAULT_PROFILE_IMAGE } from "../../utils/constant";
import ChatLayout from "./ChatLayout";
import useActiveFriend from "../../hooks/chat/useActiveFriend";
// import { io } from "socket.io-client";

const ActiveFriends = ({isVisible }) => {
  
  const {
    onlineUsers,
    activeUserId,
    setActiveUserId,
    showUserChat,
    setShowUserChat,
    updateSeenStatus,
    conversationList,
  } = useActiveFriend();

  let user = JSON.parse(localStorage.getItem("token"));
  // const [chatCount, setChatCount] = useState(0)
  const handleActiveUserClick = (userId) => {
    setShowUserChat(!showUserChat);
    setActiveUserId(userId === activeUserId ? null : userId);

    !showUserChat && updateSeenStatus(userId === activeUserId ? null : userId);
  };

  const mergedArray = [];

  // console.log('onlineUsers', onlineUsers)
  onlineUsers.forEach((user) => {
    const { userId, name, socketId, img } = user;
    mergedArray.push({
      userId,
      name,
      img,
      isOnline: !!socketId,
      newMsgCount: 0,
    });
  });

  // Add objects from conversationList regardless of newMsgCount
   conversationList?.forEach((conversation) => {
    const { userId, name, socketId, newMsgCount, img } = conversation;
    const existsInMergedArray = mergedArray.some(
      (item) => item.userId === userId
    );

    if (!existsInMergedArray) {
      mergedArray.push({
        userId,
        name,
        img,
        isOnline: !!socketId,
        newMsgCount,
      });
    } else {
      const objIndex = mergedArray.findIndex((obj) => obj.userId === userId);
      mergedArray[objIndex].newMsgCount = newMsgCount;
    }
  });
  let onlineUsers1 = mergedArray.filter((item) => item?.userId !== user?.id);
  // console.log('onlineUsers1..',onlineUsers1)
  
  if (!isVisible) return null;

  return (
    <div className="absolute top-20 right-0 bg-white border border-gray-300 p-2 rounded-lg shadow w-[20%] mx-2">
      <h1 className="font-extrabold text-gray-500">Chats</h1>
      {onlineUsers1.map((onlineUser, index) => (
        <div
          className={`p-2 rounded-xl my-2 cursor-pointer ${
            showUserChat && onlineUser.userId !== activeUserId
              ? ""
              : "hover:shadow-xl hover:bg-slate-100"
          }`}
          key={index}
          onClick={() => handleActiveUserClick(onlineUser.userId)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={onlineUser.img || DEFAULT_PROFILE_IMAGE}
                alt="default-profile-img"
                className="h-7 w-7 rounded-full"
              />
              {onlineUser.isOnline && (
                <div className="w-2 h-2 bg-green-500 rounded-full -ml-1 mt-4" />
              )}
              {onlineUser.isOnline ? (
                <h1 className="font-bold mx-1">{onlineUser.name}</h1>
              ) : (
                <h1 className="font-bold mx-2">{onlineUser.name}</h1>
              )}
            </div>
            {onlineUser.newMsgCount > 0 && !showUserChat && (
              <p className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                {onlineUser.newMsgCount}
              </p>
            )}
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
