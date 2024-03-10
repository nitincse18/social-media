import React from 'react'
import PostList from '../Home/Posts/PostList'
import AboutMe from './AboutMe'
import CreatePost from '../Home/Posts/CreatePost'

const MyPosts = () => {
  return (
    <div>
      <div className="mt-10">
        <AboutMe />
      </div>

      <div className="mt-10">
        <CreatePost />
      </div>
        <PostList/>
    </div>
  )
}

export default MyPosts