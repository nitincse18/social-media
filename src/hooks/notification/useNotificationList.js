import { useEffect, useState } from "react";
import { socket } from "../../components/Shared/socket/socketConfig";
import { getNotificationListApi } from "../../services/notificationService";

const useNotificationList = () => {
  const [arrivalNotification, setArrivalNotification] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const [shouldFetchConversation, setShouldFetchConversation] = useState(true);

  const getNotifications = async () => {
    const notificationList = await getNotificationListApi();
    setNotifications(notificationList.data);
    setNotificationCount(notificationList.count)
    setShouldFetchConversation(false);
  };

  useEffect(() => {
    socket.on("getNotification", (data) => {
      setArrivalNotification({
        sender: {id: data.senderId},
        content: data.content,
        title: data.title,
        receiver:{id: data.receiverId},
        timeago: 'Just now',
        newMsgCount: 0
      });

      const updatedNotificationList = notifications.map((notification) => {
        const {senderId} = notification;
        if (notification.userId === senderId) {
            notification.newMsgCount++;
            setNotificationCount(notificationCount+1)
        }
        return notification;
      });

      setNotificationCount(notificationCount);
      setShouldFetchConversation(true);
      setNotifications(updatedNotificationList)
    });


    if(shouldFetchConversation) {
        getNotifications()
     }

    return () => {
      socket.off("getNotification");
    };
  }, [shouldFetchConversation]);

  useEffect(() => {
    arrivalNotification && 
    setNotifications((prev) => [...prev, arrivalNotification]);
  }, [arrivalNotification]);

  return { notifications, notificationCount };
};

export default useNotificationList;
