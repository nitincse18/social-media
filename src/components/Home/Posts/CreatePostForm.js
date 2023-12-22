import React from "react";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import InsertEmoticonSharpIcon from "@material-ui/icons/InsertEmoticonSharp";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';

const CreatePostForm = ({ fn }) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
    // Add your file handling logic here
  };

  return (
    <div className=" p-6 h-96 w-auto rounded shadow-md bg-white ">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold items-center">
          <span className="text-blue-600">
            <AddRoundedIcon fontSize="medium" />
          </span>
          Create New Post
        </span>
        <span className="text-blue-500 cursor-pointer -mt-2 -mr-2">
          <button
            onClick={fn}
            className="mt-4 bg-gray-400 text-right text-white rounded"
          >
            <CancelOutlinedIcon />
          </button>
        </span>
      </div>
      <hr />
      <div className="flex">
        <div className="w-1/2 float-left">
          <div className="grid grid-cols-2 gap-2">
            <button className="p-2 m-2  bg-gray-300 hover:bg-blue-300 rounded-full text-xs">
              <span className="text-green-500 text-xs"><PhotoLibraryIcon  /></span> Photo/Video
            </button>
            <button className="p-2 m-2  bg-gray-300 hover:bg-blue-300 rounded-full text-xs">
              <span className="text-green-500"><LocationOnOutlinedIcon/></span> Post Location
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className=" p-2 m-2 bg-gray-300 hover:bg-blue-300 rounded-full text-sm">
              <span className="text-green-500"><GifOutlinedIcon/></span> Post Gif
            </button>
            <button className="p-2 m-2  bg-gray-300 hover:bg-blue-300 rounded-full text-sm">
              <span className="text-green-500"><LocalOfferOutlinedIcon/></span> Tag to Friend
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className=" p-2 m-2 bg-gray-300 hover:bg-blue-300 rounded-full text-sm">
              <span className="text-green-500"><LinkOutlinedIcon/></span> Share Link
            </button>
            <button className="p-2 m-2  bg-gray-300 hover:bg-blue-300 rounded-full text-sm">
              <span className="text-green-500"><LanguageOutlinedIcon /></span> Post as Ad
            </button>
          </div>

          <div className=" rounded-lg border-2 h-28 text-center items-center flex ">
            <label className="block text-sm font-medium text-gray-700 p-6">
              Drop file here to Upload
              <input
                type="file"
                className="className='h-40 w-40 px-2  m-2 text-sm border-2 border-blue-500"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        <div className="w-1/2 flex flex-col relative">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="h-28 w-96 px-2  m-2 text-sm border-2 border-blue-500"
          />
          <button className="border-2 border-blue-400 bg-blue-400 rounded-xl absolute bottom-2 right-2 w-1/2 p-2 ">Publish</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostForm;
