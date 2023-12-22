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

const ViewPosts = () => {
    const [activeButton, setActiveButton] = useState(0);

  const buttonList = ['Home', 'Recent', 'Favourite'];

  const handleButtonClick = (index) => {
    setActiveButton(index);
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
        <ChatRooms />
      </div>


      <div>
        {POSTS.map(post =>(
          <div className='h-auto flex flex-col rounded-md text-md mt-6 border bg-gray-100 p-1'>
              <div className='flex'>
                <img 
                src={post.userImage} 
                alt=''
                className='m-2 p-2 h-14 w-14 rounded-full'
                />
                <div className='flex flex-col'>
                  <h1 className='mt-4 text-blue-400'>{post.userName}<span className='text-sm font-light text-black'> Post {post.contentType}</span> </h1>
                  <p className='text-xs font-light text-gray-500'>{post.publishedDate}</p>
                </div>
              </div>
              
              
              <div className='mx-4 flex flex-col'>
                <h1>{post.title}</h1>
                <p className='text-sm font-light mb-2'>{post.content}</p>
                {
                  post.contentType === 'image' && (
                    <img src={post.mediaUrl} />
                  )
                }
                {
                  post.contentType=== 'video' && (
                    // <video width="750" height="500" controls >
                    //   <source src={post.mediaUrl} type="video/mp4"/>
                    // </video>
                    <iframe width="440" height="300" src="https://www.youtube.com/embed/WVGChZZfvbQ?si=Nagt7kQ8un8tMLDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  )
                }
                {
                 post.contentType=== 'text'  && (<hr className='mt-2'/>)
                }
                <div className='flex mt-8 text-green-400 text-xs '>
                  <div className="flex items-center mr-4">
                    <VisibilityOutlinedIcon fontSize='small'/>
                    <span className="ml-1 mb-3 text-black">10</span>
                  </div>
                  <div className="flex items-center mr-4">
                  <ChatBubbleOutlineOutlinedIcon fontSize='small' />
                    <span className="ml-1 mb-3 text-black">10</span>
                  </div>
                  <div className="flex items-center mr-4">
                  <GradeOutlinedIcon fontSize='small' />
                    <span className="ml-1 mb-3 text-black">10</span>
                  </div>
                  <div className="flex items-center mr-4">
                  <ShareOutlinedIcon fontSize='small' />
                    <span className="ml-1 mb-3 text-black">10</span>
                  </div>
                  
                  
                 
                </div>
                <div className='flex mt-2 '>
                  <button className='p-2 bg-gray-600 rounded-lg m-2 hover:bg-blue-400 cursor-pointer'><ThumbUpAltOutlinedIcon fontSize='small' />Like</button>
                  <button className='p-2 bg-gray-600 rounded-lg m-2 hover:bg-blue-400 cursor-pointer'><CommentOutlinedIcon fontSize='small' />Comment</button>
                  <button className='p-2 bg-gray-600 rounded-lg m-2 hover:bg-blue-400 cursor-pointer'><ScreenShareOutlinedIcon fontSize='small' />Share</button>

                </div>
              </div>
          </div>
        ))
          
        }
        
      </div>
       
    </div>
  )
}

export default ViewPosts