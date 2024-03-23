import React, {useState, useEffect} from "react";
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
import { createPost } from "../../../services/postService";
import toast from "react-hot-toast";
import { postList } from "../../../services/postService";

const CreatePostForm = ({ fn, sendDataToParent }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({title:'', file: '', contentType: '', content: ''});

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
    // Add your file handling logic here
    setFile(selectedFile);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    // Check if the content is not empty before submitting
    if (title.trim() === '') {
      toast.error('Title cannot be empty');
      return;
    }
    // if (content.trim() === '') {
    //   setError('Content cannot be empty');
    //   return;
    // }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file, file?.name);
    formData.append('content', content)
    

    if(file?.type?.includes('image')){
      formData.append('contentType', 'image')
    }
    else if(file?.type?.includes('video')){
      formData.append('contentType', 'video')
    }else{
      formData.append('contentType', 'text');
    }
 

    const newPost = await createPost(formData, file)
    const updatedList= [...posts, {title: newPost.title, content: newPost.content, contentType: newPost.contentType, file: newPost.file}]
    // Reset the error state if there was a previous error
    setError('');
    
    // Optionally, clear the form fields after submission
    setContent('');
    setTitle('');
    sendDataToParent(false)
  };

  const getPostList = async () => {
    const postRes = await postList();
    setPosts(postRes);
  };

  useEffect(() => {
    getPostList();
  }, []);
  

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
          <div className="grid grid-cols-2 gap-2 ">
            {/* <button className="p-2 m-2  bg-gray-300 hover:bg-blue-300 rounded-full text-xs">
              <span className="text-green-500 text-xs"><PhotoLibraryIcon  /></span> Photo/Video
            </button> */}
            <div className="">
            <label className="mt-4 w-full">
              <input type="file" onChange={handleFileChange} accept="image/*" style={{display: 'none'}} />
              <p className="p-2 m-2 bg-gray-300 cursor-pointer hover:bg-blue-300 rounded-full text-xs">
                <span className="text-green-500 text-xs">
                  <PhotoLibraryIcon fontSize="small" />
                </span>{' '}
                Photo/Video
              </p>
            </label>
            </div>
            

            <button className="p-2 m-2  bg-gray-300 hover:bg-blue-300 rounded-full text-xs">
              <span className="text-green-500"><LocationOnOutlinedIcon fontSize="small" /></span> Post Location
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className=" p-2 m-2 bg-gray-300 hover:bg-blue-300 rounded-full text-sm">
              <span className="text-green-500"><GifOutlinedIcon f /></span> Post Gif
            </button>
            <button className="p-2 m-2  bg-gray-300 hover:bg-blue-300 rounded-full text-sm">
              <span className="text-green-500"><LocalOfferOutlinedIcon fontSize="small" /></span> Tag to Friend
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className=" p-2 m-2 bg-gray-300 hover:bg-blue-300 rounded-full text-sm">
              <span className="text-green-500"><LinkOutlinedIcon fontSize="small" /></span> Share Link
            </button>
            <button className="p-2 m-2  bg-gray-300 hover:bg-blue-300 rounded-full text-sm">
              <span className="text-green-500"><LanguageOutlinedIcon fontSize="small" /></span> Post as Ad
            </button>
          </div>

          <div className=" rounded-lg border-2 h-28 text-center items-center flex ">
            <label className="block text-sm font-medium text-gray-700 p-6">
              Drop file here to Upload
              <input
                type="file"
                className="className='h-40 w-40 px-2  m-2 text-sm border-2 border-blue-500"
                // onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        <div className="w-1/2 flex flex-col relative">
          <input
              type="text"
              placeholder="Post Title"
              className="h-10 w-96 px-2  m-2 text-sm border-2 border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          <input
            type="text"
            placeholder="What's on your mind?"
            className="h-28 w-96 px-2  m-2 text-sm border-2 border-blue-500"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          {error && <p className="text-red-600 m-2" >{error}</p>}
          <button 
            className="border-2 border-blue-400 bg-blue-400 rounded-xl absolute bottom-2 right-2 w-1/2 p-2 "
            onClick={handleSubmit}
          >Publish</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostForm;
