import React, { useState } from 'react';
import { useTheme } from "../../utils/ThemeContext";

const GenderSelection = () => {
    const { theme } = useTheme();
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div 
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
      }}>
      <label className="block text-sm font-medium text-gray-700">Gender</label>
      <div className="mt-1 flex justify-around">
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            value="male"
            checked={selectedGender === 'male'}
            onChange={handleGenderChange}
          />
          <span className="ml-2">Male</span>
        </label>
        <label className="inline-flex items-center ">
          <input
            type="radio"
            className="form-radio"
            value="female"
            checked={selectedGender === 'female'}
            onChange={handleGenderChange}
          />
          <span className="ml-2">Female</span>
        </label>
        <label className="inline-flex items-center ">
          <input
            type="radio"
            className="form-radio"
            value="other"
            checked={selectedGender === 'other'}
            onChange={handleGenderChange}
          />
          <span className="ml-2">Other</span>
        </label>
      </div>
      {/* <p className="mt-2 text-sm text-gray-500">Selected Gender: {selectedGender}</p> */}
    </div>
  );
};

export default GenderSelection;
