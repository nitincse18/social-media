import { useEffect, useState } from "react";
import { getConversationListApi, updateSeenStatusApi } from "../../services/chat";
import { socket } from "../../components/Shared/socket/socketConfig";
import { debounce, uniqBy } from "lodash";

const useActiveFriend = () => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [conversationList, setConversationList] = useState([]);
  const [activeUserId, setActiveUserId] = useState(null);
  const [showUserChat, setShowUserChat] = useState(false);
  const [shouldFetchConversation, setShouldFetchConversation] = useState(true);
  const [chatCount, setChatCount] = useState(0);
  const [usrMsgCount, setUsrMsgCount] = useState(0)
  let user = JSON.parse(localStorage.getItem("token"));
    
  const updateSeenStatus = async (userId) => {
    await updateSeenStatusApi(userId);
  };

  const getConvertation = async () => {
    const conversations = await getConversationListApi();
    setConversationList(conversations.data);
    setChatCount(conversations.totalMsgCount)
    setShouldFetchConversation(false);
  };

    // Debounce the getConvertation function to prevent excessive API calls
    // const debouncedGetConvertation = debounce(getConvertation, 500);
  // const sendCountsToHeader = () => {
  //   sendDataToHeader({chatCount})
  // }

  useEffect(() => {
    socket.emit("addUser", user?.id);
    socket?.on("getUsers", (users) => {
      users =uniqBy(users, (user) => user.userId)
      setOnlineUsers(users);
      // sendCountsToHeader()
    });

    socket.on("getMessage", (message) => {
      const { senderId } = message;
      const updatedConversationList = conversationList.map((conversation) => {
        if (conversation.userId === senderId) {
          conversation.newMsgCount++;
          setChatCount(chatCount+1)
        }
        return conversation;
      });

      setConversationList(updatedConversationList);
      setShouldFetchConversation(true);
      setChatCount(chatCount)
    });

     // Call the debounced function instead of getConvertation directly
    //  debouncedGetConvertation();
     if(shouldFetchConversation) {
        getConvertation()
     }

    return () => {
      socket.off("getMessage");
    };
  }, [shouldFetchConversation]);
  
  return {
    onlineUsers,
    activeUserId,
    setActiveUserId,
    showUserChat,
    setShowUserChat,
    updateSeenStatus,
    conversationList,
    chatCount
  };
};

export default useActiveFriend;
