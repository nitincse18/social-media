import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Shared/Header";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SearchIcon from "@material-ui/icons/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AboutMe from "./AboutMe";
import MyPosts from "./MyPosts";
import { getUserById, updatePP } from "../../services/userService";
import Pictures from "./Pictures";
import Videos from "./Videos";
import Friends from "./Friends";
import { DEFAULT_PROFILE_IMAGE } from "../../utils/constant";
import EditIcon from "@material-ui/icons/Edit";

const UserProfile = () => {
  // State to manage the active button and user data
  const [activeButton, setActiveButton] = useState(0);
  const [userData, setUserData] = useState({});
  const [file, setFile] = useState(null);
  // Hooks for navigation and getting route parameters
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch user token from local storage
  const user = localStorage.getItem("token");

  // Button list for navigation
  const buttonList = ["Posts", "Pictures", "Videos", "Friends", "About"];

  // Handle button click to change the active button
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  // State and functions for dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // Function to fetch user data based on the user id
  const getUserData = async () => {
    const userData = await getUserById(id);
    setUserData(userData);
  };

  const handleFileChange = async(e) => {
    const selectedFile = e.target.files[0];
    // Add your file handling logic here
    console.log('selectedFile', selectedFile)
    setFile(selectedFile);

    const formData = new FormData();
    formData.append('file', selectedFile, selectedFile.name);
    setTimeout(() => {
      updatePP(formData)
    }, 1000)
     
  };


  // Effect to check user authentication and fetch user data
  useEffect(() => {
    if (user) {
      navigate(`/user-profile/${id}/posts`); // Default to PostsComponent
      getUserData();
    } else {
      navigate("/");
    }
  }, [id, navigate, user]);

  return (
    <div>
  <Header />

  <div className="mx-auto max-w-screen-xl">
    <div className="flex flex-col md:flex-row mt-8">
      <div className="w-full md:w-1/6 p-4"></div>
      {/* First part - Header, Cover Photo, User Info, Button List */}
      <div className="w-full md:w-4/6 p-4">
        <div className="relative">
          <div className="relative object-cover">
            <img
              src="https://wpkixx.com/html/socimo/images/resources/profile-banner.jpg"
              alt="cover-img"
              className="h-80 w-full object-cover rounded-lg"
            />
          </div>
          <div className="relative">
            <img
              src={userData.image || DEFAULT_PROFILE_IMAGE}
              alt={`user's profile`}
              className="absolute top-0 left-0 rounded-full w-28 h-28 object-cover border-2 border-white -mt-16 ml-1"
            />
            <label className="top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 ml-24 cursor-pointer">
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: "none" }}
              />
              <span className="text-xs flex items-center justify-end absolute h-6 w-6 rounded-full bg-white">
                <EditIcon className="text-blue-700 w-2 h-2  " /> 
              </span>
            </label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between mx-2 mt-8">
          <div className="sm:w-2/3">
            <h1 className="font-bold text-lg text-blue-700">
              {userData.first_name} {userData.last_name}
            </h1>
            <div className="flex justify-between mt-2">
              <p className="font-semibold">
                Joined: <span className="text-blue-700">{userData.joined}</span>
              </p>
              <p className="font-semibold">
                Follow: <span className="text-blue-700">55K</span>
              </p>
              <p className="font-semibold">
                Followers: <span className="text-blue-700">2.2k</span>
              </p>
              <p className="font-semibold">
                Posts: <span className="text-blue-700">{userData.postCount}</span>
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 text-right mt-3 md:mt-0">
            <input
              placeholder="Search..."
              type="text"
              className="p-2 border-2 w-full md:w-1/2 rounded-xl mx-2"
            />
            <button className="text-blue-500 px-4 -py-8 rounded h-8 ">
              <SearchIcon fontSize="small" />
            </button>
          </div>
        </div>
        <hr className="mt-4" />
        <div className="mt-4 flex flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            {/* Map through buttonList to create buttons */}
            {buttonList.map((button, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`p-2 rounded-lg m-1 h-10 ${
                  activeButton === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {button}
              </button>
            ))}
          </div>

          <div className="w-full md:w-1/3 text-right mt-3 md:mt-0">
            <div
              className=""
              onMouseEnter={handleOpenMenu}
              onMouseLeave={handleCloseMenu}
            >
              <MoreHorizIcon />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                getContentAnchorEl={null}
              >
                <MenuItem onClick={handleClose}>Edit post</MenuItem>
                <MenuItem onClick={handleClose}>Hide post</MenuItem>
                <MenuItem onClick={handleClose}>Delete post</MenuItem>
                <MenuItem onClick={handleClose}>Report</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg">
          {/* Conditionally render components based on activeButton */}
          {activeButton === 0 && <MyPosts />}
          {activeButton === 1 && <Pictures user_id={id} />}
          {activeButton === 2 && <Videos user_id={id} />}
          {activeButton === 3 && <Friends user_id={id} />}
          {activeButton === 4 && <AboutMe user={userData} />}
        </div>
      </div>

      {/* Second part - Dynamically loaded content based on activeButton */}
    </div>
  </div>
</div>

  );
};

export default UserProfile;
