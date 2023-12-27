import React from 'react'
import ClockSquare from './ClockSquare'
import ProfileComplete from './ProfileComplete'
import Advertisment from './Advertisment'
import RecentBlogs from './RecentBlogs'
import ViewPosts from './Posts/ViewPosts'
import Header from '../Shared/Header'
import { Outlet } from 'react-router-dom'

const Feed = () => {
  return (
    <div>
      <Header/>
    <div className='flex mt-8'>
      <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4 "></div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4 ">
          <ClockSquare />
          <ProfileComplete />
          <Advertisment />
          <RecentBlogs />
        </div>
        <div className="w-1/2 md:w-2/3 lg:w-2/6 p-4">
          <ViewPosts/>
          <Outlet/>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4 bg-gray-200 border border-gray-300">
          {/* 
            Your Groups
            Suggested Group
          */}
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4"></div>
    </div>
    </div>
  )
}

export default Feed