import { useEffect, useState } from "react";
import { getConversationListApi, updateSeenStatusApi } from "../../services/chat";
import { socket } from "../../components/Shared/socket/socketConfig";
import { debounce } from "lodash";

const useActiveFriend = () => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [conversationList, setConversationList] = useState([]);
  const [activeUserId, setActiveUserId] = useState(null);
  const [showUserChat, setShowUserChat] = useState(false);
  const [shouldFetchConversation, setShouldFetchConversation] = useState(true);
  let user = JSON.parse(localStorage.getItem("token"));

  const updateSeenStatus = async (userId) => {
    await updateSeenStatusApi(userId);
  };

  const getConvertation = async () => {
    const usersList = await getConversationListApi();
    setConversationList(usersList);
    setShouldFetchConversation(false);
  };

    // Debounce the getConvertation function to prevent excessive API calls
    const debouncedGetConvertation = debounce(getConvertation, 500);

  useEffect(() => {
    socket.emit("addUser", user.id);
    socket?.on("getUsers", (users) => {
      setOnlineUsers(users);
    });

    socket.on("getMessage", (message) => {
      const { senderId } = message;
      const updatedConversationList = conversationList.map((conversation) => {
        if (conversation.userId === senderId) {
          conversation.newMsgCount++;
        }
        return conversation;
      });
      setConversationList(updatedConversationList);
      setShouldFetchConversation(true);
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
  };
};

export default useActiveFriend;
