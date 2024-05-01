import React from "react";
import { useTheme } from "../../utils/ThemeContext";
import LockIcon from "@material-ui/icons/Lock";
import Header from "../Shared/Header";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const { theme } = useTheme();
  const {
    handleGenderChange,
    handleSignup,
    handlePasswordChange,
    handleRetypePasswordChange,
    setEmail,
    setFirstName,
    setLastName,
    setMobile,
    setDob,
    successMessage,
    password,
    retypePassword,
  } = useSignUp();

  return (
    <div>
      <Header />
      <div
        className="flex fixed w-full h-full"
        style={{
          background: theme === 'light' ? '#fff' : '#333',
          color: theme === 'light' ? '#333' : '#fff',
        }}
      >
        <div className="w-full md:w-auto p-6 md:p-12 my-6 mx-auto md:right-0 md:left-0 shadow-md rounded-lg bg-opacity-80">
          <h1 className="font-extrabold text-lg md:text-xl text-blue-700 text-center mb-4">
            <LockIcon />
            Create an Account
          </h1>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="First Name*"
              className="border border-black p-2 rounded-xl mb-2"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="border border-black p-2 rounded-xl mb-2"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Email*"
              className="border border-black p-2 rounded-xl mb-2"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Mobile*"
              className="border border-black p-2 rounded-xl mb-2"
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password*"
              className="border border-black p-2 rounded-xl mb-2"
              onChange={handlePasswordChange}
              value={password}
              required
            />
            <input
              type="password"
              placeholder="Retype Password*"
              className="border border-black p-2 rounded-xl mb-2"
              onChange={handleRetypePasswordChange}
              value={retypePassword}
              required
            />
            <input
              type="date"
              placeholder="Select a date"
              className="border border-black p-2 rounded-xl mb-2"
              onChange={(e) => setDob(e.target.value)}
              required
            />
            <div className="flex items-center mb-4">
              <label className="text-black text-sm font-bold mr-2">Gender*</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  className="form-radio text-indigo-600 h-5 w-5 mr-2"
                  name="gender"
                  value="male"
                  onChange={handleGenderChange}
                />
                <span className="text-black mr-4">Male</span>
                <input
                  type="radio"
                  className="form-radio text-indigo-600 h-5 w-5 mr-2"
                  name="gender"
                  value="female"
                  onChange={handleGenderChange}
                />
                <span className="text-black mr-4">Female</span>
                <input
                  type="radio"
                  className="form-radio text-indigo-600 h-5 w-5 mr-2"
                  name="gender"
                  value="other"
                  onChange={handleGenderChange}
                />
                <span className="text-black">Other</span>
              </div>
            </div>
            <button
              onClick={handleSignup}
              className="rounded-xl bg-blue-500 py-2 px-4 text-white"
            >
              Create Account
            </button>
            {successMessage && (
              <div className="text-green-500 text-center mt-4">{successMessage}</div>
            )}
          </div>
          <div className="text-center mt-4">
            <Link to="/">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
