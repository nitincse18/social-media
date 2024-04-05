import React, { useEffect } from "react";
import ClockSquare from "./ClockSquare";
import ProfileComplete from "./ProfileComplete";
import Advertisment from "./Advertisment";
import RecentBlogs from "./RecentBlogs";
import ViewPosts from "./Posts/ViewPosts";
import Header from "../Shared/Header";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../utils/ThemeContext";
import ChatLayout from "../Chat/ChatLayout";
import ActiveFriends from "../Chat/ActiveFriends";

const Feed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const user = JSON.parse(localStorage.getItem("token"));
  console.log(user);

  useEffect(() => {
    if (user) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);
  return (
    
      <div>
        <Header />
        
        <div className="flex mt-8">
          <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4 "></div>
          <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4 ">
            <ClockSquare />
            <ProfileComplete />
            <Advertisment />
            <RecentBlogs />
          </div>
          <div className="w-1/2 md:w-2/3 lg:w-2/6 p-4">
            <ViewPosts />
            <Outlet />
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4  border border-gray-100">
            {/* <ActiveFriends /> */}
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
            
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Feed;
