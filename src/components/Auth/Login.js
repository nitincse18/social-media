import React, { useState, useEffect, useSelector } from "react";
import Slider from "./Slider";
import PersonIcon from "@material-ui/icons/Person";
import { useTheme } from "../../utils/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import Header from "../Shared/Header";
import { io } from "socket.io-client";
import toast from "react-hot-toast";
import { loginForm } from "./validation/auth";
import { socket } from "../Shared/socket/socketConfig";
// import jwt from 'jsonwebtoken';
// const socket = io("http://localhost:5000", { autoConnect: false });

import { getOnlineUsers, addOnlineUsers } from "../../utils/globals";


const Login = () => {
  const { theme } = useTheme();
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const  [onlineUsers, setOnlineUsers] = [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector(store => store.user);
  const user = localStorage.getItem("token");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginFormValidMsg = loginForm({ email, password });
      if (loginFormValidMsg) {
        return toast.error(loginFormValidMsg);
      }

      const response = await login({ email, password });

      const userData = response;
      localStorage.setItem("token", JSON.stringify(response));

      dispatch(addUser(userData));
      
      navigate("/home");
      toast.success("LoggedIn Successfully.🤩");
    

      socket.connect();
      socket.on("connect", async () => {
        console.log(`Socket ${userData.id} connected`);
        
        // if(!onlineUsers.some((user) => userData.id === newUserId))
        // addOnlineUsers(userData.id)
        // setOnlineUsers(userData.id)
        // io.emit('get-users', onlineUsers)
      });
     
    } catch (error) {
      console.error("Login failed:", error.status);
      toast.error(error.message);
    }
  };



  useEffect(() => {
    if (user) {
      
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      // User is signed out
      dispatch(removeUser());
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header  />

      <div
        className="flex fixed w-full"
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#333" : "#fff",
        }}
      >
        <div className="flex-1 ">
          <Slider />
        </div>

        <div className="flex-1 relative">
          <img
            src="https://wpkixx.com/html/socimo/images/star-shape.png"
            alt="Diagonal Corner Image"
            className={`absolute -top-20 right-20 transform translate-x-1/2 translate-y-1/2 w-36 h-36 `}
          />
          <img
            src="https://wpkixx.com/html/socimo/images/mockup.png"
            alt="Diagonal Corner Image"
            className={`absolute -bottom-24 left-20 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 `}
          />

          <div className="mx-auto flex mt-60 ml-20">
            <form className="flex flex-col justify-items-start">
              <h1 className="font-extrabold text-blue-600">
                <PersonIcon /> Login
              </h1>
              <input
                // ref={email}
                type="text"
                placeholder="Email Address *"
                required
                className="border border-black m-2 p-2 rounded-xl w-96"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                // ref={password}
                type="password"
                placeholder="Password *"
                autoComplete="on"
                required
                className="border border-black m-2 p-2 rounded-xl w-96"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-red-500 font-bold py-2">{errorMessage}</p>

              <div className="flex justify-end">
                <button
                  onClick={handleLogin}
                  className=" border border-blue-950 rounded-xl m-2 p-2 bg-blue-400 w-24 hover:bg-blue-600"
                >
                  Login
                </button>
              </div>

              <hr />
              <div className="flex items-center">
                <Link to={"/sign-up"}>
                  <button className="border border-green-950 rounded-xl mx-24 my-2 p-2 bg-green-400 w-48 hover:bg-green-700">
                    Create Account
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
