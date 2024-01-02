import React, {useEffect, useState} from 'react'
import Header from '../Shared/Header';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AboutMe from './AboutMe';
import MyPosts from './MyPosts';
import CreatePost from '../Home/Posts/CreatePost';
import { getUserById } from '../../services/userService';
import { useNavigate, useParams } from 'react-router-dom';

const UserProfile = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [userData, setUserDate] = useState({})
  const navigate = useNavigate()
  const {id} = useParams();
  const user  = localStorage.getItem('token')
  

  const buttonList = ['Posts', 'Pictures', 'Videos', 'Friends', 'About'];
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

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

  const getUserData = async () => {
    const userData = await getUserById(id);
    setUserDate(userData)
  }

  useEffect( () => {
    if (user) {
      navigate("/user-profile/"+id);
      getUserData()
    } else {
      navigate("/");
    }
    
  },[])
  

  return (
    <div>
      <Header />
    
    <div className="mx-auto max-w-screen-xl">
      <div className="flex flex-col md:flex-row mt-8">
        <div className="w-full md:w-1/4 p-4"></div>
        <div className="w-full md:w-1/2 p-4">
          <div className="relative">
            {/* ... rest of your code ... */}
            <img 
              src='https://wpkixx.com/html/socimo/images/resources/profile-banner.jpg' 
              alt='cover-img' 
              className='h-80 w-full object-cover rounded-lg'
            />
            <img
                  src={userData.image}
                  alt={`user's profile`}
                  className="absolute top-0 left-0 rounded-full w-28 h-28 object-cover border-2 border-white  mt-48 ml-6"
            />
            <button className='absolute top-72 left-36 text-center rounded-full w-16  object-cover border-2 border-white bg-green-900   ml-96'>Follow</button>
          </div>

          <div className="flex justify-between mt-2">
            {/* ... rest of your code ... */}
            <h1 className='font-bold w-5/12'>{userData.first_name} {userData.last_name}</h1>

           <div className='flex w-7/12 justify-between mx-2'>
             <p>Joined: Today</p>
             <p>Follow: 55K</p>
             <p>Followers: 2.2K</p>
             <p>Posts: 932</p>
           </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row">
            <div className="w-full md:w-2/3">
              {/* ... rest of your code ... */}
              {buttonList.map((button, index) => (
                  <button
                    key={index}
                    onClick={() => handleButtonClick(index)}
                    className={`p-2 rounded-lg m-1 h-10 ${
                      activeButton === index ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                    }`}
                  >
                    {button}
                  </button>
                ))}
            </div>

            <div className="w-full md:w-1/3 text-right relative mt-3 md:mt-0">
              {/* ... rest of your code ... */}
              <input 
                    placeholder='Search...'
                    type='text'
                    className='p-2 border-2 w-1/2 rounded-xl mx-2'
                  />
                  <button className="absolute right-0 top-1  text-blue-500 px-4 -py-8 rounded h-8 ">
                    <SearchIcon fontSize="small" />
                  </button>
            </div>
            <div className='mt-3 mr-3 text-right '>
               <div className='' 
                    onMouseEnter={handleOpenMenu}
                    onMouseLeave={handleCloseMenu}>
                      <MoreHorizIcon  />
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
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

          <div className="mt-10">
            <AboutMe />
          </div>

          <div className="mt-10">
            <CreatePost />
          </div>

          <div className="mt-10">
            <MyPosts />
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4"></div>
      </div>
    </div>
    </div>
  );
}

export default UserProfile