import React, { useState, useEffect } from "react";
import FriendCard from "./FriendCard";
import { getFriendsList, unfriend } from "../../services/friendsService";

const FriendTab = () => {
  const [myFriendsList, setMyFriendsList] = useState([]);
  const [receivedData, setReceivedData] = useState(null);

  const handleDataFromChild = (data) => {
    console.log('Data received from child:', data);
    setReceivedData(data);
    unfriendUser(data)
  };

  const unfriendUser = async(id) => {
    await unfriend({id})
  }

  const friendsList = async () => {
    const friends = await getFriendsList();
    setMyFriendsList(friends);
  };

  useEffect(() => {
    friendsList();
  }, []);
  return (
    <div className="m-8">
      <div className="m-2 p-2 flex flex-wrap">
        {myFriendsList.map((item, idex) => (
          <FriendCard
            name={item.first_name + " " + item.last_name}
            image={item.image}
            buttonName={'Unfriend'}
            sendDataToParent={() => handleDataFromChild(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendTab;
