import React from "react";
import useNotificationList from "../../hooks/notification/useNotificationList";
import { DEFAULT_PROFILE_IMAGE } from "../../utils/constant";

const NotificationList = ({ isVisible }) => {
  const { notifications } = useNotificationList();

  if (!isVisible) return null;
  return (
    <div className="absolute top-20 right-0 bg-white border border-gray-300 p-2 rounded-lg shadow w-[20%] mx-2">
      {/* Notification items go here */}
      {
        notifications.map(notification => (
            <div className="h-auto  bg-slate-400 m-1 p-1 rounded-lg" key={notification.id}>
              <div className="flex px-1">
                <img className="h-7 w-7 rounded-full mx-2" src={notification.sender.image || DEFAULT_PROFILE_IMAGE} alt="" />
                <h1 className="font-semibold">{notification.sender.first_name} has commented on your {notification.type} </h1>
                {/* <h1 className="font-thin">{notification.content}</h1> */}
              </div>
                
            </div>
        ))
      }
    </div>
  );
};

export default NotificationList;



// import { useEffect, useState } from "react";
// import { socket } from "../Shared/socket/socketConfig";
// import { getNotificationListApi } from "../../services/notificationService";
// import { DEFAULT_PROFILE_IMAGE } from "../../utils/constant";

// // const notifications = [
// //   {
// //     title: "Test1",
// //     content:
// //       "lorem ipsumElit excepteur irure culpa enim aliquip nulla nulla ut aliquip nostrud qui irure velit.",
// //     type: "like",
// //   },
// //   {
// //     title: "Test1",
// //     content:
// //       "lorem ipsumElit excepteur irure culpa enim aliquip nulla nulla ut aliquip nostrud qui irure velit.",
// //     type: "like",
// //   },
// //   {
// //     title: "Test1",
// //     content:
// //       "lorem ipsumElit excepteur irure culpa enim aliquip nulla nulla ut aliquip nostrud qui irure velit.",
// //     type: "like",
// //   },
// //   {
// //     title: "Test1",
// //     content:
// //       "lorem ipsumElit excepteur irure culpa enim aliquip nulla nulla ut aliquip nostrud qui irure velit.",
// //     type: "like",
// //   },
// //   {
// //     title: "Test1",
// //     content:
// //       "lorem ipsumElit excepteur irure culpa enim aliquip nulla nulla ut aliquip nostrud qui irure velit.",
// //     type: "like",
// //   },
// // ];
// const NotificationList = ({ isVisible }) => {
//   const [arrivalNotification, setArrivalNotification] = useState(null);
//   const [notifications, setNotifications] = useState([]);
  

//   const getNotifications = async () => {
//     const notificationList = await getNotificationListApi();
//     console.log("notificationList", notificationList);
//     setNotifications(notificationList.data);
//   };
//   useEffect(() => {
//     socket.on("getNotification", (data) => {
//       setArrivalNotification({
//         sender: {id: data.senderId},
//         content: data.content,
//         title: data.title,
//         receiver:{id: data.receiverId},
//         timeago: 'Just now',
//         newMsgCount: 0
//       });
//     });
//     getNotifications();
//   }, [])

//   useEffect(() => {
//     arrivalNotification && 
//     setNotifications((prev) => [...prev, arrivalNotification]);
//   }, [arrivalNotification]);

//   if (!isVisible) return null;
//   return (
//     <div className="absolute top-20 right-0 bg-white border border-gray-300 p-2 rounded-lg shadow w-[20%] mx-2">
//       {/* Notification items go here */}
//       {
//         notifications.map(notification => (
//             <div className="h-auto  bg-slate-400 m-1 p-1 rounded-lg">
//               <div className="flex px-1">
//                 <img className="h-7 w-7 rounded-full mx-2" src={notification.sender.image || DEFAULT_PROFILE_IMAGE} alt="" />
//                 <h1 className="font-semibold">{notification.sender.first_name} has commented on your {notification.type} </h1>
//                 {/* <h1 className="font-thin">{notification.content}</h1> */}
//               </div>
                
//             </div>
//         ))
//       }
//     </div>
//   );
// };

// export default NotificationList;
