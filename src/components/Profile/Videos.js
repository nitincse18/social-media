import React,{useEffect, useState} from 'react'
import { getUserVideos } from '../../services/userService';

const Videos = () => {
  const [videos, setVideos] = useState([])

  const getVideoList =async () => {
    const postRes = await getUserVideos();
    setVideos(postRes)
  }

  useEffect(() => {
    getVideoList()
  }, [])
  return (
    <div className='flex flex-col mt-4 p-1 bg-slate-200 rounded-lg'>
      <div className='flex justify-between mt-2'>
        <h1 className='font-bold ml-2'>Videos</h1>
        <button className='text-blue-600 hover:bg-gray-300 rounded-2xl p-1'>Add photos/video</button>
      </div>

      <div className='flex flex-wrap mt-2 rounded-lg  mx-3'>
        {
          videos.map((video, index) => (
            <video key={index} className='h-52 w-48 p-1 rounded-lg' src={video} alt={'user-video'+index} />
      
          ))

        }

      </div>
      
    </div>
  )
}

export default Videos