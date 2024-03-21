import React, { useEffect, useState } from "react";
import {
  getRecommendedFriends,
  sendFriendRequest,
} from "../../../services/friendsService";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Link } from "react-router-dom";
import { DEFAULT_PROFILE_IMAGE } from "../../../utils/constant";

function RecommendedFriend() {
  const [suggested, setSuggested] = useState([]);
  const [receiverId, setReceiverId] = useState([]);
  const getRecommentdFriendList = async () => {
    const suggestedFriends = await getRecommendedFriends();
    setSuggested(suggestedFriends);
  };

  useEffect(() => {
    getRecommentdFriendList();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? suggested.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === suggested.length - 1 ? 0 : prevIndex + 1
    );
  };

  const sendRequest = async (id) => {
    await sendFriendRequest({ receiverId: id });
  };

  console.log(suggested);
  return (
    <div className="h-auto flex flex-col rounded-md text-md mt-6 border bg-gray-100 p-2">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="font-semibold text-blue-700">Suggested </span>
          <p className="text-xs font-light text-gray-500"> Similar People</p>
        </div>
        <div>
          <Link to={"/friends"}>
            <span className="text-blue-500 cursor-pointer">See More</span>
          </Link>
        </div>
      </div>

      <div className="flex space-x-4 p-1 overflow-x-auto">
        {/* Previous Button */}
        <button
          className={`left-0 top-1/2 rounded-full p-2 text-blue-600 -ml-6 ${
            currentIndex == 0 && "pointer-events-none opacity-50"
          }`}
          onClick={handlePrev}
        >
          <ArrowLeftIcon fontSize="large" />
        </button>

        {suggested.slice(currentIndex, currentIndex + 4).map((suggs, index) => (
          <div className="flex flex-1 flex-col items-center justify-around h-52 ">
            <img 
              src={suggs.image || DEFAULT_PROFILE_IMAGE}
              alt={`${suggs.first_name}'s image`}
              className="rounded-lg w-20 h-24 object-cover border-2 border-blue-600 m-2"
            />
            <div className="flex-row">
              <p className="  text-black font-semibold rounded-lg opacity-80 ">
                {suggs.first_name} {suggs.last_name}
              </p>
              <button
                className="text-white bg-blue-600 rounded-xl px-2"
                onClick={() => sendRequest(suggs.id)}
              >
                Send
              </button>
            </div>
          </div>
        ))}

        {/* Next Button */}
        <button
          className={`right-0 top-1/2 rounded-full p-2 text-blue-600 -ml-16 ${
            currentIndex == suggested.length - 4 &&
            "pointer-events-none opacity-50"
          }`}
          onClick={handleNext}
        >
          <ArrowRightIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}

export default RecommendedFriend;
