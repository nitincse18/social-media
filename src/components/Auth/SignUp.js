import React, { useState } from "react";
import { useTheme } from "../../utils/ThemeContext";
import Dropdown from "../Shared/Dropdown";
import { MONTHS, YEARS } from "../../utils/constant";
import GenderSelection from "../Shared/GenderSelection";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import LockIcon from '@material-ui/icons/Lock';

const SignUp = () => {
  const { theme } = useTheme();
  const [isClicked, setIsClicked] = useState(false);
  const backgroundImageStyle = {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#333" : "#fff",
  };

  const termAndConditionSelected = (e) => {
    e.preventDefault();
    setIsClicked(!isClicked);
  };

  return (
    <div style={{background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#333" : "#fff"}} className="flex h-screen ">
      <div className="flex justify-between ">
        <form className="absolute w-1/3 p-12 my-6 mx-auto right-0 left-0 shadow-lg rounded-lg bg-opacity-80">
          <h1 className="font-extrabold text-lg text-blue-700 text-center">
            <LockIcon />Create an Account
          </h1>
          <p className="text-gray-400 text-center mx-2 px-2 mb-4">
            Its quick and Easy
          </p>
          <div>
            <input
              // ref={email}
              type="text"
              placeholder="First Name"
              className="border border-black mx-px p-2 rounded-xl w-48"
            />
            <input
              // ref={email}
              type="text"
              placeholder="Last Name"
              className="border border-black mx-px p-2 rounded-xl w-48"
            />
          </div>

          <div className="">
            <input
              // ref={email}
              type="text"
              placeholder="Email or Mobile"
              className="border border-black my-4 p-2 rounded-xl w-96"
            />
          </div>

          <div>
            <input
              // ref={email}
              type="password"
              placeholder="Password"
              className="border border-black mx-px p-2 rounded-xl w-48"
            />
            <input
              // ref={email}
              type="password"
              placeholder="Retype Password"
              className="border border-black mx-px p-2 rounded-xl w-48"
            />
          </div>
          {/* w-96 text-left */}
          <div className="flex flex-col items-baseline  my-2">
            {/* First Row - Labels */}
            <div className="flex mb-2">
              <label className="px-4 ml-0">Date</label>
              <label className="px-4 ml-16">Year</label>
              <label className="px-4 ml-16">Month</label>
            </div>

            {/* Second Row - Inputs and Dropdowns */}
            <div className="flex mb-2">
              <input
                type="text"
                placeholder="Date"
                className="border border-black p-2 rounded-xl w-32"
              />
              <Dropdown title="Year" options={YEARS} />
              <Dropdown title="Month" options={MONTHS} />
            </div>
          </div>

          <div>
            <GenderSelection />
          </div>

          <div className="flex my-4">
            <button onClick={(e) => termAndConditionSelected(e)}>
              {isClicked ? (
                <CheckCircleOutlineOutlinedIcon fontSize="small" />
              ) : (
                <FiberManualRecordOutlinedIcon fontSize="small" />
              )}
            </button>
            <span className="mx-2">
              <p className="text-xs">
                By clicking Sign Up, you agree to our Terms, Data Policy and
                Cookie Policy. You may receive SMS notifications from us and can
                opt out at any time.
              </p>
            </span>
          </div>

        
        <div className="grid grid-flow-col">
        <div className=" col-span-6 mt-2">
            <span >Register With</span>
            <ul className="flex my-4">
              <li>
                <a className="border border-green-950 rounded-xl  mx-2 p-2 bg-blue-700 w-48 text-white" href="#">
                  <i className=""></i> Facebook
                </a>
              </li>
              <li>
                <a className="border border-green-950 rounded-xl  mx-2 p-2 bg-blue-400 w-48 text-white " href="#" >
                  <i className=""></i> Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 mt-6 text-right">
            <button className="border border-green-950 rounded-3xl  mx-2 p-2 bg-blue-300 text-white">SIGNUP</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
