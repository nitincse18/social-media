import React from 'react';
import LocalHospitalTwoToneIcon from '@material-ui/icons/LocalHospitalTwoTone';

const ProfileComplete = () => {
    const notCompletedItems = []
  return (
    <div className='w-56 h-60 mt-6 flex flex-wrap rounded-sm border p-2'>
        <div className='align-top'>
        <h1 className='font-semibold '>Complete Your Profile</h1>
        </div>
        <div>
        <h1 className='text-xs font-medium'>Your Profile is missing followings!</h1>
        </div>
        <div className='justify-between cursor-pointer hover:text-blue-600'>
            <h1 className='text-xs font-medium'>
            <span className='text-blue-600'><LocalHospitalTwoToneIcon fontSize='small' /></span>
            Upload Your Picture
            </h1>
        </div>
        <div>
        <h1 className='text-xs font-medium cursor-pointer hover:text-blue-600'><span className='text-blue-600'><LocalHospitalTwoToneIcon fontSize='small' /></span> Your University?</h1>
        </div>
        <div>
        <h1 className='text-xs font-medium cursor-pointer hover:text-blue-600'>
        <span className='text-blue-600'><LocalHospitalTwoToneIcon fontSize='small' /></span>
            Add Payment Method</h1>
        </div>
        
    </div>
  )
}

export default ProfileComplete