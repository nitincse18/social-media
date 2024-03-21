import React, { useState, useEffect } from "react";
import FriendCard from "./FriendCard";
import {
  getRecommendedFriends,sendFriendRequest
} from "../../services/friendsService";

const SuggestedFriendList = () => {
  const [suggested, setSuggested] = useState([]);
  const [receivedData, setReceivedData] = useState(null);

  const handleDataFromChild = (data) => {
    console.log('Data received from child:', data);
    setReceivedData(data);
    sendRequest(data)
  };

  const sendRequest = async(id) => {
    await sendFriendRequest({receiverId:id})
  }
  
  const getRecommentdFriendList = async () => {
    const suggestedFriends = await getRecommendedFriends();
    setSuggested(suggestedFriends);
  };

  useEffect(() => {
    getRecommentdFriendList();
  }, []);
  return (
    <div className="m-8">
      <div className="m-2 p-2 flex flex-wrap">
        {suggested.map((item, idex) => (
          <FriendCard
            name={item.first_name + " " + item.last_name}
            image={item.image}
            sendDataToParent={() => handleDataFromChild(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestedFriendList;
