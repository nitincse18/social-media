import React, { useState, useEffect } from "react";
import FriendCard from "./FriendCard";
import { acceptFriendRequest, receivedRequests } from "../../services/friendsService";

const ReceivedRequest = () => {
  const [receivedRequestsList, setReceivedRequestsList] = useState([]);
  const [receivedData, setReceivedData] = useState(null);

  const handleDataFromChild = (data) => {
    console.log('Data received from child:', data);
    setReceivedData(data);
    acceptRequest(data)
  };

  const acceptRequest = async(id) => {
    await acceptFriendRequest({id})
  }

  const friendsList = async () => {
    const friends = await receivedRequests();
    setReceivedRequestsList(friends);
  };

  useEffect(() => {
    friendsList();
  }, []);
  return (
    <div className="m-8">
      <div className="m-2 p-2 flex flex-wrap">
        {receivedRequestsList.map((item, idex) => (
          <FriendCard
            name={item?.sender?.first_name + " " + item?.sender?.last_name}
            image={item?.sender?.image}
            buttonName={'Accept Request'}
            sendDataToParent={()=>handleDataFromChild(item?.sender?.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ReceivedRequest;
