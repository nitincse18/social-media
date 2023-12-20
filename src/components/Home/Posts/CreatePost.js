import React from 'react';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import InsertEmoticonSharpIcon from '@material-ui/icons/InsertEmoticonSharp';

const CreatePost = () => {
  return (
    <div className=' h-32 mt-6 rounded-md border p-2'>
        <div className=''>
            <h1 className='ml-1 m font-bold'>Create New Post</h1>
            <input 
            type="text"
            placeholder="Create New Post"
            className='h-10 w-full border rounded-full p-2'
            />
            <button className='p-2 m-2 hover:bg-gray-300 rounded-full text-sm'><span className='text-green-500'><PhotoLibraryIcon /></span> Photo/Video</button>
            <button className='p-2 m-2 hover:bg-gray-300 rounded-full text-sm'><span className='text-orange-500'><InsertEmoticonSharpIcon /></span> Feeling/Activity</button>
            <button className='p-2 m-2 hover:bg-gray-300 rounded-full text-sm'><span className='text-red-500'><VideoCallSharpIcon/></span> Video</button>
        </div>
    </div>
  )
}

export default CreatePost