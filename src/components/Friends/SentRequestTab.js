import React, { useState, useEffect } from "react";
import FriendCard from "./FriendCard";
import { sentRequests } from "../../services/friendsService";
import { deleteSentRequest } from './../../services/friendsService';

const SentRequestTab = () => {
  const [sentRequestsList, setSentRequests] = useState([]);
  const [receivedData, setReceivedData] = useState(null);

  const handleDataFromChild = (data) => {
    console.log('Data received from child:', data);
    setReceivedData(data);
    cancelSentRequest(data);
  };

  const cancelSentRequest = async(id) => {
    await deleteSentRequest({id})
  }

  const friendsList = async () => {
    const friends = await sentRequests();
    setSentRequests(friends);
  };

  useEffect(() => {
    friendsList();
  }, []);
  return (
    <div className="m-8">
      <div className="m-2 p-2 flex flex-wrap">
        {sentRequestsList.map((item, index) => (
          <FriendCard
            name={item?.receiver?.first_name + " " + item?.receiver?.last_name}
            image={item?.receiver?.image}
            buttonName={'Delete Request'}
            sendDataToParent={()=>handleDataFromChild(item?.receiver?.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SentRequestTab;
