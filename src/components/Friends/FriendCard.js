import React from "react";
import { DEFAULT_PROFILE_IMAGE } from "../../utils/constant";

const FriendCard = ({ name, image, buttonName, sendDataToParent  }) => {

   const handleRequest = (data) => {
    sendDataToParent(data)
   } 
  
  return (
    <div className="p-2  flex justify-around">
      <div className="bg-white shadow-md overflow-hidden text-center items-center w-44 h-66">
        <img
          className="h-40 rounded-lg w-full  p-2"
          src={image || DEFAULT_PROFILE_IMAGE}
          alt=""
        />
        <div className="my-2 p-2">
          <h1 className="text-lg font-bold text-center">{name}</h1>
          <button 
          className="text-white bg-blue-600 rounded-xl py-2  px-4 text-lg"
          onClick={() => handleRequest(buttonName || 'Send')}
          >
            {buttonName || 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
