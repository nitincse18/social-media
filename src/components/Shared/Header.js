import React, { useState, useEffect } from "react";
import { useTheme } from "../../utils/ThemeContext";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import NightsStayRoundedIcon from "@material-ui/icons/NightsStayRounded";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { logout } from '../../services/authService';
import { socket } from "./socket/socketConfig";
import { removeOnlineUser } from "../../utils/globals";
import { DEFAULT_PROFILE_IMAGE } from "../../utils/constant";
import NotificationList from "../Notification/NotificationList";
import ActiveFriends from "../Chat/ActiveFriends";
import useActiveFriend from "../../hooks/chat/useActiveFriend";
import { getNotificationListApi } from "../../services/notificationService";
import { getConversationListApi } from "../../services/chat";
import useNotificationList from "../../hooks/notification/useNotificationList";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showChats, setShowChats] = useState(false);
  const [allMessageCount, setAllMsgCount] = useState(0);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const user = JSON.parse(localStorage.getItem('token'));

  let {chatCount, conversationList} = useActiveFriend();
  let {notificationCount, notifications} = useNotificationList()

  console.log('chatCount Header', chatCount)
  const handleSignout =async () => {
    const response = await logout();
    dispacth(removeUser())
    removeOnlineUser(response)
    navigate('/')
    
  };

  const handleProfile = async (id) => {
    // navigate('/user-profile')
  }



  const handleButtonClicked = async (button) => {
    if(button === 'chat'){
      setShowChats(!showChats);
      setShowNotifications(false)
      if(!showChats){
        await getConversationListApi()
      }
      
    }
    if(button === 'notification'){
      setShowChats(false);
      setShowNotifications(!showNotifications);
      if(!showNotifications){
        await getNotificationListApi()
      }
      
    }
    
    
  }

  useEffect(() => {
      if (user) {
        const { id, email, displayName, photoURL } = user;
        dispacth(
          addUser({
            id: id,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        setIsLoggedIn(true);
      } else {
        socket.on("disconnect", () => { // Fire when socket is disconnected
          console.log("Socket disconnected");
        });
        dispacth(removeUser());

      }

  }, []);

  return (
    <div className="grid grid-flow-col  shadow-2xl justify-between">
      <div className="flex col-span-1">

      <Link to={'/'}>
        <div className="flex">
        <img
          className="w-16 h-16 mt-1 ml-8 bg-woman-img bg-center opacity-120"
          src={theme === "light" ? "/logo1.png" : "/logo-white.png"}
          alt="logo"
        />
        <h1 className="font-extrabold text-2xl mt-6 ">
          <span>Social </span> <span className="text-yellow-500">Nexus</span>
        </h1>
        </div>
        
      </Link>
        {user &&
          <input
            type="text"
            className="w-56 h-8 mt-6 border border-gray-500 rounded-2xl ml-4 p-2"
            placeholder="Search..."
          />
        }
      </div>

      <div className="space-x-6 mx-14 mt-5 text-right flex col-span-1 justify-between">
        {user && (
            <>
            <div className="">
             <Link to={'/user-profile/'+ user.id+ '/posts'}>
              <button  className="w-10 h-10 border border-blue-500 rounded-full " >
                  <img
                    src={user.image || DEFAULT_PROFILE_IMAGE}
                    className="rounded-full h-10 w-10 "
                    alt="Avatar"
                  />
                </button>
              </Link> 
            </div>

           <div className="space-x-6 text-blue-600  ">
            
              <button 
              className={`w-10 h-10 border border-blue-500 rounded-full relative ${showChats && 'bg-blue-500 text-white'}`} 
              onClick={() => handleButtonClicked('chat')}
              
              >
                {chatCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">{chatCount}</span>}
                <ChatIcon />
              
              </button>

              <button
                className={`w-10 h-10 border border-blue-500 rounded-full relative ${showNotifications && 'bg-blue-500 text-white'}`}
                onClick={() => handleButtonClicked('notification')} // Toggle notification list visibility
              >
                <NotificationsIcon />
                {notificationCount > 0 && <span className="bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center absolute -top-1 -right-1">{notificationCount}</span>}
              </button>
              <button onClick={handleSignout} className="w-10 h-10 border border-blue-500 rounded-full text-blue-600 cursor-pointer">
                <ExitToAppIcon />
              </button>
              
            </div>
            </>
          )}


          <div className=" ">
              <button
                className="w-10 h-10 border border-blue-500 rounded-full text-blue-600"
                onClick={toggleTheme}
              >
                  {theme === "light" ? (
                    <NightsStayRoundedIcon />
                  ) : (
                    <WbSunnyRoundedIcon />
                  )}
              </button>
          </div>
          
      </div>
      <ActiveFriends isVisible={showChats} />
      <NotificationList isVisible={showNotifications} />
    </div>
  );
};

export default Header;
