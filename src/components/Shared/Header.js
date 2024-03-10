import React, { useState, useEffect } from "react";
import { useTheme } from "../../utils/ThemeContext";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import NightsStayRoundedIcon from "@material-ui/icons/NightsStayRounded";
import HomeIcon from "@material-ui/icons/Home";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { logout } from '../../services/authService';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const user = JSON.parse(localStorage.getItem('token'));
  console.log(user)

  const handleSignout =async () => {
    const response = await logout();
    console.log('response', response)
    dispacth(removeUser())
    navigate('/')
  };

  const handleProfile = async (id) => {
    // navigate('/user-profile')
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
        setIsLoggedIn(true)
        // navigate("/home");
      } else {
        // User is signed out
        dispacth(removeUser());
        // navigate("/");
      }

  }, []);

  return (
    <div className="grid grid-flow-col  shadow-2xl justify-between">
      <div className="flex col-span-1">

        <img
          className="w-16 h-16 mt-1 ml-8 bg-woman-img bg-center opacity-120"
          src={theme === "light" ? "/logo1.png" : "/logo-white.png"}
          alt="logo"
        />
        <h1 className="font-extrabold text-2xl mt-6 ">
          <span>Social </span> <span className="text-yellow-500">Nexus</span>
        </h1>

        {
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
                    src="https://avatars.githubusercontent.com/u/38283863?v=4"
                    className="rounded-full h-10 w-10 "
                    alt="Avatar"
                  />
                </button>
              </Link> 
            </div>

           <div className="space-x-6 text-blue-600  ">
              <Link to={'/'}>
              <button className="w-10 h-10 border border-blue-500 rounded-full" ><HomeIcon /></button>
              </Link>
              <button className="w-10 h-10 border border-blue-500 rounded-full" ><ChatIcon /></button>
              <button className="w-10 h-10 border border-blue-500 rounded-full" ><NotificationsIcon /></button>
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

    </div>
  );
};

export default Header;
