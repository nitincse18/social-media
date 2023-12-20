import React from 'react'

const RecentBlogs = () => {
    const blogList = [{title: 'To share information about a given topic and become an expert in an industry.', img: 'https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png', updatedDate:'2 weeks ago'}, {title: 'To attract visitors to your site, and turn those visitors into leads.', img: 'https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg', updatedDate:'2 days ago'}, {title: 'To cultivate an online community and engage with an audience.', img: 'https://cdn2.hubspot.net/hubfs/53/blogging-stats-to-know.jpg', updatedDate:'1 week ago'}]
  return (
    <div className='w-56 h-56 flex flex-col rounded-sm text-md mt-6 border bg-gray-200 p-1'>
        <div className='flex justify-between items-center mb-2'>
        <span className='font-bold'>Recent Blogs</span>
        <span className='text-blue-500 cursor-pointer'>See All</span>
      </div>
        {blogList.map((blog, index) => (
            <div key={index} className='flex items-center m-2 cursor-pointer hover:text-blue-600'>
            <img className='w-16 h-12' src={blog.img} alt='Blog' />
            <div className='ml-2'>
              <h1 className='text-xs'>{blog.title.substring(0, 35) + '...'}</h1>
              <p className='text-xs font-extralight'>{blog.updatedDate}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default RecentBlogs