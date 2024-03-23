import React, { useState } from "react";
import { useTheme } from "../../utils/ThemeContext";
import LockIcon from "@material-ui/icons/Lock";
import Header from "../Shared/Header";
import { signup } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUp = () => {
  const { theme } = useTheme();
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const navigate = useNavigate();

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  // const termAndConditionSelected = (e) => {
  //   e.preventDefault();
  //   setIsClicked(!isClicked);
  // };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signup({
        email,
        password,
        first_name,
        last_name,
        mobile,
        dob,
        gender,
      });
      e.preventDefault();
      if (password !== retypePassword) {
        toast.error("Passwords do not match");
      } else {
        // Assuming the login API returns user data
        const userData = response;
        console.log("userData", userData);
        // localStorage.setItem('token', JSON.stringify(response))
        // const user = jwt.decode (userData)
        // dispatch(addUser(userData));
        navigate("/");
        toast.success(userData.message);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error(error.message);
    }
  };

  const handlePasswordChange = (e) => {
    try {
      setPassword(e.target.value);
    } catch (error) {
      if (error) toast.error(error.message);
    }
  };

  const handleRetypePasswordChange = (e) => {
    try {
      setRetypePassword(e.target.value);
    } catch (error) {
      if (error) toast.error(error.message);
    }
  };

  return (
    <div>
      <Header />
      <div
        className="flex fixed w-full"
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#333" : "#fff",
        }}
      >
        <div className=" w-auto p-12 my-6 mx-auto right-0 left-0 shadow-lg rounded-lg bg-opacity-80">
          <h1 className="font-extrabold text-lg text-blue-700 text-center">
            <LockIcon />
            Create an Account
          </h1>
          <p className="text-gray-400 text-center mx-2 px-2 mb-4">
            Its quick and Easy
          </p>
          <div className="flex relative justify-center">
            <form>
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="border border-black mx-4 p-2 rounded-xl w-44"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="border border-black mx-4 p-2 rounded-xl w-44"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="flex ">
                <input
                  type="text"
                  placeholder="Email*"
                  className="border border-black ml-4 p-2 my-2 rounded-xl w-96"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex ">
                <input
                  type="text"
                  placeholder="Mobile*"
                  className="border border-black ml-4 p-2 my-2 rounded-xl w-96"
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="flex">
                <input
                  type="password"
                  placeholder="Password*"
                  className="border border-black mx-4 p-2 rounded-xl w-44"
                  onChange={handlePasswordChange}
                  value={password}
                  required
                />
                <input
                  type="password"
                  placeholder="Retype Password*"
                  className="border border-black mx-4 p-2 rounded-xl w-44"
                  onChange={handleRetypePasswordChange}
                  value={retypePassword}
                  required
                />
              </div>
              <div className="flex my-2 justify-center">
                <label
                  className="block text-black text-sm font-bold mb-2 mx-5 my-2"
                  htmlFor="date"
                >
                  DOB*
                </label>
                <input
                  className="shadow appearance-none border rounded-xl w-full mx-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="date"
                  type="date"
                  placeholder="Select a date"
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div className="flex mx-4 my-4 justify-between">
                <label className="block text-black text-sm font-bold mb-2">
                  Gender*
                </label>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600 h-5 w-5"
                      name="gender"
                      value="male"
                      onChange={handleGenderChange}
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600 h-5 w-5"
                      name="gender"
                      value="female"
                      onChange={handleGenderChange}
                    />
                    <span className="ml-2">Female</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600 h-5 w-5"
                      name="gender"
                      value="other"
                      onChange={handleGenderChange}
                    />
                    <span className="ml-2">Other</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleSignup}
                  className="rounded-xl bg-blue-500 py-2 px-4 m-2 text-white"
                >
                  Create Account
                </button>
              </div>
              (
              <div className="flex justify-center">
                <Link to={"/"}>
                  <button className="bg-green-700 rounded-xl py-2 px-4 m-2 text-white">
                    Log In
                  </button>
                </Link>
              </div>
              )
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
