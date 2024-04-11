import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import { createComment } from "../../../services/postService";
import { DEFAULT_PROFILE_IMAGE } from "../../../utils/constant";
import { socket } from "../../Shared/socket/socketConfig";

const CommentView = ({postId, comments, user, loggedInUser}) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [arrivalNotification, setArrivalNotification] = useState(null);
  
  const commentPost = async(e) => {
    e.preventDefault();

    if (content.trim() === '') {
      setError('Content cannot be empty');
      return;
    }
    const comment = await createComment({content, post_id: postId});

    loggedInUser.id != user.id && socket.emit("sendNotification", {
      senderId: loggedInUser.id,
      receiverId: user.id,
      content: content,
      content_id: postId,
      title: `User is commented on your post`,
      type: 'post', 
      timeago: 'Just now',
      newMsgCount: 0
    });
    setArrivalNotification({
      sender: {id: loggedInUser.id},
      receiver: {id: user.id},
      content: content,
      title: `${loggedInUser.first_name} is commented on your post`,
      type: 'post',

    })

    setError('');
    
    // Optionally, clear the form fields after submission
    setContent('');
    
  }
  return (
    <div className="flex flex-col mt-2">
      <div className="inputWithButton relative">
        <input
          type="text"
          className="p-2 border-2 w-full rounded-xl"
          placeholder="Write Comment"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button 
        className="absolute right-0 top-2  text-blue-500 px-4 -py-4 rounded h-8 "
        onClick={commentPost}
        >
          <SendIcon fontSize="small" />
        </button>
      </div>

      <div className='flex flex-col'>
        {
            comments.map(comment=> (
                <div className="flex my-1">
                    <img 
                    src={comment.user.image || DEFAULT_PROFILE_IMAGE} 
                    alt=''
                    className='m-2 p-2 h-14 w-14 rounded-full'
                    />
                    <div className='flex flex-col border bg-white w-full '>
                    <h1 className='mt-2 text-blue-400 mx-2'>{comment.user.first_name} {comment.user.last_name}<span className='text-xs font-light text-black'> {comment.timeago} </span> </h1>
                    <p className='text-xs font-light text-gray-500 mx-2 mb-2'>{comment.content}</p>
                    </div>
                </div>
            ))
        }

      </div>
    </div>
  );
};

export default CommentView;
