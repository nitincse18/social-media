import React from "react";
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';

const RecentStories = () => {
  const storiesData = [
    {
      username: "Create story",
      imageUrl: "https://avatars.githubusercontent.com/u/38283863?v=4", // Replace with actual image URLs
      profileImageUrl: "https://avatars.githubusercontent.com/u/38283863?v=4", // Replace with actual profile image URLs
      isAddStory: true,
    },
    {
      username: "Tamana Bhatia",
      imageUrl: "https://wpkixx.com/html/socimo/images/resources/story-card.jpg",
      profileImageUrl: "https://avatars.githubusercontent.com/u/38283863?v=4",
      isAddStory: false,
    },
    {
      username: "Emily Caros",
      imageUrl: "https://wpkixx.com/html/socimo/images/resources/story-card2.jpg",
      profileImageUrl: "https://avatars.githubusercontent.com/u/38283863?v=4",
      isAddStory: false,
    },
    {
      username: "Daniel Cardos",
      imageUrl: "https://wpkixx.com/html/socimo/images/resources/story-card3.jpg",
      profileImageUrl: "https://avatars.githubusercontent.com/u/38283863?v=4",
      isAddStory: false,
    },
    {
      username: "Emma Watson",
      imageUrl: "https://wpkixx.com/html/socimo/images/resources/story-card4.jpg",
      profileImageUrl: "https://avatars.githubusercontent.com/u/38283863?v=4",
      isAddStory: false,
    },
  ];
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold">Recent Stories</span>
        <span className="text-blue-500 cursor-pointer">See All</span>
      </div>

      <div className="flex space-x-2 p-1 overflow-x-auto">
        {storiesData.map((story, index) => (
          <div key={index} className="flex flex-col items-center">
            {story.isAddStory ? (
              <div className="relative rounded-lg h-40 p-1 cursor-pointer">
                <img
                  src={story.imageUrl}
                  alt={story.username}
                  className="rounded-lg w-20 h-40 object-cover"
                />
                <img
                  src={story.profileImageUrl}
                  alt={`${story.username}'s profile`}
                  className="absolute top-0 left-0 rounded-full w-8 h-8 object-cover border-2 border-white  m-2"
                />

                <p className="absolute mx-1 -my-1 bottom-0 left-0 right-0 flex flex-col">
                    <span className="relative z-10  -my-3 mx-7 text-blue-600 bg-opacity-40 "><AddCircleOutlineSharpIcon fontSize="medium" /></span>
                    <span className="bg-black text-white font-light text-center p-2 text-xs rounded-b-lg opacity-75 ">{story.username}</span>
                </p>
                
              </div>
            ) : (
              <div className="relative rounded-lg h-40 p-1 cursor-pointer">
                <img
                  src={story.imageUrl}
                  alt={story.username}
                  className="rounded-lg w-20 h-40 object-cover"
                />
                <img
                  src={story.profileImageUrl}
                  alt={`${story.username}'s profile`}
                  className="absolute top-0 left-0 rounded-full w-8 h-8 object-cover border-2 border-white  m-2"
                />
                <p className="absolute mx-1 -my-1 bottom-0 left-0 right-0 bg-black text-white font-light text-center p-2 text-xs rounded-b-lg opacity-80">
                  {story.username}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentStories;
