import React from 'react'
import KeyboardArrowRightTwoToneIcon from '@material-ui/icons/KeyboardArrowRightTwoTone';
import KeyboardArrowLeftTwoToneIcon from '@material-ui/icons/KeyboardArrowLeftTwoTone';
import TextsmsTwoToneIcon from '@material-ui/icons/TextsmsTwoTone';

const ChatRooms = () => {
    const chatRooms = [
        
        {
          username: "Jane Smith",
          imageUrl: "https://placekitten.com/201/301",
          profileImageUrl: "https://avatars.githubusercontent.com/u/38283863?v=4",
          isAddStory: false,
        },
        {
          username: "John Doe",
          imageUrl: "https://placekitten.com/200/300",
          profileImageUrl: "https://avatars.githubusercontent.com/u/38283863?v=4",
          isAddStory: false,
        },
        {
          username: "JaneSmith",
          imageUrl: "https://placekitten.com/201/301",
          profileImageUrl: "https://avatars.githubusercontent.com/u/38283863?v=4",
          isAddStory: false,
        },
        {
          username: "JohnDoe",
          imageUrl: "https://placekitten.com/200/300",
          profileImageUrl: "https://avatars.githubusercontent.com/u/38283863?v=4",
          isAddStory: false,
        },
      ];
  return (
    <div className='h-48 flex flex-col rounded-md text-md mt-6 border bg-gray-100 p-1'>

        {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center">
        <span className="text-blue-500 cursor-pointer mx-2">
          <KeyboardArrowLeftTwoToneIcon />
        </span>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center">
        <span className="text-blue-500 cursor-pointer mx-2">
          <KeyboardArrowRightTwoToneIcon />
        </span>
      </div> */}
        
        <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Chat Rooms Video chat with friends</span>
            <span className="text-blue-500 cursor-pointer">Create Room</span>
        </div>

        <div className="flex space-x-4 p-1 overflow-x-auto">
            {
                chatRooms.map((chatRoom, index) => (
                <div className='flex flex-col items-center border bg-white rounded-md h-32 w-32'>
                    <img
                        src={chatRoom.profileImageUrl}
                        alt={`${chatRoom.username}'s profile`}
                        className="rounded-full w-8 h-8 object-cover border-2 border-white m-2"
                    />
                    <p className="mx-1 -my-1 bottom-0 left-0 right-0 text-center p-2 text-xs rounded-b-lg opacity-80">
                        {chatRoom.username}
                    </p>
                    <div className="flex justify-between items-center mb-2">
                        <span className="mx-2"><button className='bg-blue-100 p-1 rounded-md '>Join</button></span>
                        <span className="text-blue-600 cursor-pointer border-2 border-white rounded-full w-10 h-10 bg-slate-200 p-1">
                            <TextsmsTwoToneIcon fontSize='small'/></span>
                    </div>
                    
                </div>
                ))
            } 
            
        </div>

    </div>
  )
}

export default ChatRooms