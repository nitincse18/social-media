import React, { useState, useEffect } from 'react'
import { getUserPhotos } from '../../services/userService';

const Pictures = ({user_id}) => {
  const [photos, setPhotos] = useState([])

  const getPhotoList =async () => {
    const postRes = await getUserPhotos();
    setPhotos(postRes)
  }

  useEffect(() => {
    getPhotoList()
  }, [])

  console.log('user_id', photos)
  return (
    <div className='flex flex-col mt-4 p-1 bg-slate-200 rounded-lg'>
      <div className='flex justify-between mt-2'>
        <h1 className='font-bold ml-2'>Photos</h1>
        <button className='text-blue-600 hover:bg-gray-300 rounded-2xl p-1'>Add photos/video</button>
      </div>

      <div className='flex flex-wrap mt-2 rounded-lg  mx-3'>
        {
          photos.map((photo, index) => (
            <img key={index} className='h-52 w-48 p-1 rounded-lg' src={photo} alt={'user-photo'+index} />
          ))
        }
      </div>
      
    </div>
  )
}

export default Pictures