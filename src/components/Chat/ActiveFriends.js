import React, { useEffect, useState,  } from "react";
import { getOnlineUsers } from "../../utils/globals";
import { socket } from "../Shared/socket/socketConfig";
import { DEFAULT_PROFILE_IMAGE } from "../../utils/constant";
import { Link } from "react-router-dom";
import ChatLayout from "./ChatLayout";
import { getConversationListApi, updateSeenStatusApi } from "../../services/chat";
import { find, uniqBy } from "lodash";
// import { io } from "socket.io-client";

// const  mergeArrays = (onlineUsers, conversationList) =>{
//   console.log('conversationList->', conversationList)
//   const mergedArray = [];

//   // Add all users from onlineUsers
//   onlineUsers.forEach(user => {
//       const { userId, name, socketId, img } = user;
//       mergedArray.push({
//           userId,
//           name,
//           img,
//           isOnline: !!socketId,
//           newMsgCount: 0
//       });
//   });

//   // Add objects from conversationList regardless of newMsgCount
//   conversationList.forEach(conversation => {
//       const { userId, name, socketId, newMsgCount, img } = conversation;
//       const existsInMergedArray = mergedArray.some(item => item.userId === userId);
      
//       if (!existsInMergedArray) {
//           mergedArray.push({
//               userId,
//               name,
//               img,
//               isOnline: !!socketId,
//               newMsgCount
//           });
//       }
//   });

//   return mergedArray;
// }

const ActiveFriends =  () => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [showUserChat, setShowUserChat] = useState(false);
  const [activeUserId, setActiveUserId] = useState(null);
  const [conversationList, setConversationList] = useState([]);
  let user = JSON.parse(localStorage.getItem("token"));

  const handleActiveUserClick = (userId) => {
    setShowUserChat(!showUserChat);
    setActiveUserId(userId === activeUserId ? null : userId);

    !showUserChat && updateSeenStatus(userId === activeUserId ? null : userId)
  };

  const updateSeenStatus =async (userId) => {
    await updateSeenStatusApi(userId)
  }

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
  }, []);

  const mergedArray = [];

  // Add all users from onlineUsers
  onlineUsers.forEach(user => {
      const { userId, name, socketId, img } = user;
      mergedArray.push({
          userId,
          name,
          img,
          isOnline: !!socketId,
          newMsgCount: 0
      });
  });

  // Add objects from conversationList regardless of newMsgCount
  conversationList.forEach(conversation => {
    const { userId, name, socketId, newMsgCount, img } = conversation;
    const existsInMergedArray = mergedArray.some(item => item.userId === userId);
    
    if (!existsInMergedArray) {
        mergedArray.push({
            userId,
            name,
            img,
            isOnline: !!socketId,
            newMsgCount
        });
    }else{
        const objIndex = mergedArray.findIndex(obj => obj.userId == userId);
        mergedArray[objIndex].newMsgCount = newMsgCount
    }
});
  let onlineUsers1 =  mergedArray.filter(item => item.userId != user.id);


  return (
    <div>
  <h1 className="font-extrabold text-gray-500">Active Friends</h1>
  {onlineUsers1.map((onlineUser, index) => (
    <div
      className={`p-2 rounded-xl my-2 cursor-pointer ${
        showUserChat && onlineUser.userId !== activeUserId
          ? ''
          : 'hover:shadow-xl hover:bg-slate-100'
      }`}
      key={index}
      onClick={() => handleActiveUserClick(onlineUser.userId)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={onlineUser.img || DEFAULT_PROFILE_IMAGE}
            className="h-7 w-7 rounded-full"
          />
          {onlineUser.isOnline && (
            <div className="w-2 h-2 bg-green-500 rounded-full -ml-1 mt-4" />
          )}
          {onlineUser.isOnline ? (<h1 className="font-bold mx-1">{onlineUser.name}</h1>) :(<h1 className="font-bold mx-2">{onlineUser.name}</h1>)
          }
        </div>
        {onlineUser.newMsgCount > 0 && !showUserChat && <p className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
          {onlineUser.newMsgCount}
        </p>}
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
