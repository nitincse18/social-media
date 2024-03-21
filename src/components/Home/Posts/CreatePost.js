import React,{useState} from 'react';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import InsertEmoticonSharpIcon from '@material-ui/icons/InsertEmoticonSharp';
import CreatePostForm from './CreatePostForm';

const CreatePost = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <div className='h-36 mt-6 rounded-md border p-2 bg-gray-100'>
        <div className=''>
            <h1 className='ml-1 font-bold'>Create New Post</h1>
            <input 
            type="text"
            placeholder="Create New Post"
            className='h-10 w-full border rounded-full p-2 mt-2'
            onClick={openPopup}
            />
            <button className='p-2 m-2 hover:bg-gray-300 rounded-full text-sm'><span className='text-green-500'><PhotoLibraryIcon /></span> Photo/Video</button>
            <button className='p-2 m-2 hover:bg-gray-300 rounded-full text-sm'><span className='text-orange-500'><InsertEmoticonSharpIcon /></span> Feeling/Activity</button>
            <button className='p-2 m-2 hover:bg-gray-300 rounded-full text-sm'><span className='text-red-500'><VideoCallSharpIcon/></span> Video</button>

            {isPopupOpen && (
              <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-70 z-20">
                 <CreatePostForm fn={closePopup} />
              </div>
            )}
        </div>
    </div>
  )
}

export default CreatePost