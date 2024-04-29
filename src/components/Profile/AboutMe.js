import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import { updateUserProfile } from "../../services/userService";

const AboutMe = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const updateUser = async () => {
    await updateUserProfile(editedUser);
  };
  const handleSaveClick = () => {
    // Logic to save edited user data
    console.log("Edited user:", editedUser);
    setIsEditing(false);
    updateUser();
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="h-auto mt-6 rounded-md border p-2 bg-gray-100">
      <div className="flex justify-between">
        <h1 className="font-bold">About Me</h1>
        <p
          className="cursor-pointer"
          onClick={isEditing ? handleSaveClick : handleEditClick}
        >
          {isEditing ? (
            <button className="bg-blue-500 p-2 rounded-lg text-white">
              Save
            </button>
          ) : (
            <CreateIcon />
          )}
        </p>
      </div>

      {!isEditing ? (
        <div className="">
          <h1>Email: {user.email}</h1>
          <h1>Gender: {user.gender}</h1>
          <h1>Location: {user.location}</h1>
          <h1>Website: {user.website}</h1>
          <h1>Occupation: {user.occupation}</h1>
        </div>
      ) : (
        <div>
          <form>
            <div className="mb-4 flex ">
              <div className="w-[50%] mr-8">
                <label htmlFor="firstName" className="block font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  value={editedUser.first_name.trim()}
                  onChange={handleChange}
                  className="form-input mt-1 w-full"
                />
              </div>
              <div className="ml-8 w-[50%]">
                <label htmlFor="lastName" className="block font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  value={editedUser.last_name.trim()}
                  onChange={handleChange}
                  className="form-input mt-1 w-full"
                />
              </div>
            </div>


            <div className="mb-4 flex ">
              <div className="w-[50%] mr-8">
              <label htmlFor="location" className="block font-semibold">
                Location:
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={editedUser.location.trim()}
                onChange={handleChange}
                className="form-input mt-1 w-full"
              />
              </div>
              <div className="ml-8 w-[50%]">
              <label htmlFor="occupation" className="block font-semibold">
                Occupation:
              </label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                value={editedUser.occupation.trim()}
                onChange={handleChange}
                className="form-input mt-1 w-full"
              />
              </div>
            </div>

          </form>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
