import React from "react";
import SendIcon from "@material-ui/icons/Send";

const CommentView = ({postId, comments}) => {
  return (
    <div className="flex flex-col mt-2">
      <div className="inputWithButton relative">
        <input
          type="text"
          className="p-2 border-2 w-full rounded-xl"
          placeholder="Write Comment"
        />
        <button className="absolute right-0 top-2  text-blue-500 px-4 -py-4 rounded h-8 ">
          <SendIcon fontSize="small" />
        </button>
      </div>

      <div className='flex flex-col'>
        {
            comments.map(comment=> (
                <div className="flex my-1">
                    <img 
                    src={'https://gumlet.assettype.com/freepressjournal/2022-03/179ac45e-0e0b-4560-b4d0-e47b046f3018/filmy_indore_2_oct_25.jpg'} 
                    alt=''
                    className='m-2 p-2 h-14 w-14 rounded-full'
                    />
                    <div className='flex flex-col border bg-white w-full '>
                    <h1 className='mt-2 text-blue-400 mx-2'>{comment.userName}<span className='text-xs font-light text-black'> 2 hours ago </span> </h1>
                    <p className='text-xs font-light text-gray-500 mx-2 mb-2'>{comment.comment}</p>
                    </div>
                </div>
            ))
        }
                
      </div>
    </div>
  );
};

export default CommentView;
