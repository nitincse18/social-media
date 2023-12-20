import React, {useState} from 'react'
import CreatePost from './CreatePost'

const ViewPosts = () => {
    const [activeButton, setActiveButton] = useState(0);

  const buttonList = ['Home', 'Recent', 'Favourite'];

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div>
        <div>
        {buttonList.map((button, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`p-2 rounded-lg m-1 h-10 ${
              activeButton === index ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            {button}
          </button>
        ))}
      </div>

      <div>
        <CreatePost />
      </div>
       
    </div>
  )
}

export default ViewPosts