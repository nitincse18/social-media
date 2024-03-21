import React, {useState} from 'react'
import CreatePost from './CreatePost'
import RecentStories from './RecentStories';
import ChatRooms from './ChatRooms';
import { POSTS } from '../../../utils/constant';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
import CommentView from './CommentView';
import PostList from './PostList';
import RecommendedFriend from './RecommendedFriend';

const ViewPosts = () => {
    const [activeButton, setActiveButton] = useState(0);
    const [showComments, setShowComments] = useState(false);
    const [comments] = useState([]);

  const buttonList = ['Home', 'Recent', 'Favourite'];

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const toggleComments = (postId) => {
    setShowComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className=''>
        <div>
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

      <div>
        <CreatePost />
      </div>
      <div>
        <RecentStories />
      </div>
      <div>
        <RecommendedFriend />
      </div>


      <div>
            <PostList/>
       
      
      </div>
       
    </div>
  )
}

export default ViewPosts