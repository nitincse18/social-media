import React, {useState} from 'react';
import { POSTS } from '../../../utils/constant';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
import CommentView from './CommentView';

const PostList = () => {

    const [showComments, setShowComments] = useState(false);
    const toggleComments = (postId) => {
        setShowComments((prev) => ({
        ...prev,
        [postId]: !prev[postId],
        }));
    };
  return (
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
                    <iframe width='100%' height="300" src={post.mediaUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  )
                }
                {
                 post.contentType=== 'text'  && (<hr className='mt-2'/>)
                }
                <div className='flex mt-8 text-green-400 text-xs mx-2'>
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
                  <button onClick={() => toggleComments(post.id)} className='p-2 bg-gray-600 rounded-lg m-2 hover:bg-blue-400 cursor-pointer'><CommentOutlinedIcon fontSize='small' />Comments</button>
                  <button className='p-2 bg-gray-600 rounded-lg m-2 hover:bg-blue-400 cursor-pointer'><ScreenShareOutlinedIcon fontSize='small' />Share</button>
                </div>

                <div >
                  {/* <CommentView comments={post.reactions.comments} /> */}
                  {showComments[post.id] && (
                      <CommentView postId={post.id} comments={post.reactions.comments} />
                    )}
                </div>
              </div>
          </div>
        ))
          
        }
    </div>
  )
}

export default PostList