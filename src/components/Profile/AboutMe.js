import React, { useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';

const AboutMe = ({user}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Logic to save edited user data
    console.log('Edited user:', editedUser);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className='h-auto mt-6 rounded-md border p-2 bg-gray-100'>
      <div className='flex justify-between'>
        <h1 className='font-bold'>About Me</h1>
        <p className='cursor-pointer' 
          onClick={isEditing ? handleSaveClick : handleEditClick}
        >
          {isEditing ? 
            <button 
            className='bg-blue-500 p-2 rounded-lg text-white'
            >Save</button>
          : <CreateIcon />
          }
          </p>
      </div>

      {
        !isEditing ?
        (
        <div className=''>
          <h1>Email: {user.email}</h1>
          <h1>Gender: {user.gender}</h1>
          <h1>Location: {user.location}</h1>
          <h1>Website: {user.website}</h1>
          <h1>Occupation: {user.occupation}</h1>
        </div>
        ): 
        
        (
          <div>
            <form>
            <div className="mb-4">
            <label htmlFor="email" className="block font-semibold">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={editedUser.first_name.trim()}
              onChange={handleChange}
              className="form-input mt-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block font-semibold">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={editedUser.last_name}
              onChange={handleChange}
              className="form-input mt-1 w-full"
            />
          </div>
            </form>
          </div>
        )
      }
    </div>
  )
}

export default AboutMe