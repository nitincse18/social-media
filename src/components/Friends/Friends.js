import React, { useState } from "react";
import Header from "../Shared/Header";
import SuggestedFriendList from "./SuggestedFriendList";
import FriendTab from "./FriendTab";
import SentRequestTab from "./SentRequestTab";
import ReceivedRequest from "./ReceivedRequest";

const Friends = () => {
  const [activeTab, setActiveTab] = useState("suggested");
  


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "suggested":
        return <SuggestedFriendList  />;
      case "friend":
        return <FriendTab />;
      case "sentRequest":
        return <SentRequestTab />;
      case "receivedRequest":
        return <ReceivedRequest />;
      default:
        return null;
    }
  };
  return (
    <div>
      <Header />
      <div className="flex mt-8 ">
        <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4 "></div>
        {/* Make Tabs for suggested, Friends, Sent */}

        <div className="w-1/2 md:w-2/3 lg:w-4/6 p-4 mx-10 shadow-lg overflow-hidden bg-gray-100">
          <div className="flex justify-evenly font-bold">
            <button
              className={`${
                activeTab === "suggested"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } px-4 py-2 rounded-md`}
              onClick={() => handleTabClick("suggested")}
            >
              Suggested
            </button>
            <button
              className={`${
                activeTab === "friend"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } px-4 py-2 rounded-md`}
              onClick={() => handleTabClick("friend")}
            >
              Friends
            </button>
            <button
              className={`${
                activeTab === "sentRequest"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } px-4 py-2 rounded-md`}
              onClick={() => handleTabClick("sentRequest")}
            >
              Sent Request
            </button>

            <button
              className={`${
                activeTab === "receivedRequest"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } px-4 py-2 rounded-md`}
              onClick={() => handleTabClick("receivedRequest")}
            >
              Received Request
            </button>
          </div>
          <div className="mt-4">{renderTabContent()}</div>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4 "></div>
      </div>
    </div>
  );
};

export default Friends;
