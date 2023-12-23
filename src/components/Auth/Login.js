import React, { useState } from "react";
import Slider from "./Slider";
import PersonIcon from "@material-ui/icons/Person";
import { useTheme } from "../../utils/ThemeContext";
import { Link } from "react-router-dom";
import { login } from '../../services/authService';
import { useUser } from "../../utils/UserContext";

const Login = () => {
  const { theme } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const { login: userLogin } = useUser();

  const handleLogin = async () => {
    try {
      const response = await login({ username, password });
      console.log('Login successful:', response);
      
      // Assuming the login API returns user data
      // const userData = response.data.user;
     
      // Update the user state
      // userLogin(userData);

      // Redirect the user to another page (you can use React Router)
      // history.push('/home');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure (display an error message, etc.)
    }
  };


  return (
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
              placeholder="Email Address"
              className="border border-black m-2 p-2 rounded-xl w-96"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              // ref={password}
              type="password"
              placeholder="Password"
              className="border border-black m-2 p-2 rounded-xl w-96"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Link to={'/home'}>
            <button onClick={handleLogin} className="border border-blue-950 rounded-xl m-2 p-2 bg-blue-400 w-24">
              Login
            </button>
            </Link>
           
            <hr/>
            <div className="flex items-center">
                <Link to={'/sign-up'}>
                <button className="border border-green-950 rounded-xl mx-24 my-2 p-2 bg-green-400 w-48 ">Create Account</button>
                </Link>
            </div>
            
          </form>
        </div>
      </div>
    </div>
    //     <div className={`flex flex-col lg:flex-row fixed w-full ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} text-${theme === 'light' ? 'black' : 'white'}`}>
    //     <div className="lg:w-1/6">
    //       <button onClick={toggleTheme}>
    //         {theme === 'light' ? <ToggleOffOutlinedIcon /> : <ToggleOnOutlinedIcon />}
    //       </button>
    //     </div>

    //     <div className="lg:w-2/6">
    //       {/* Responsive classes to make the Carousel smaller on small and medium screens */}
    //       <div className="w-full md:w-2/3 lg:w-full">
    //         <Slider />
    //       </div>
    //     </div>

    //     <div className="lg:w-3/6 relative">
    //       {/* Responsive margin for the form on small and medium screens */}
    //       <div className="mx-auto mt-8 md:mt-16 lg:mt-60 lg:ml-20">
    //         <form className="flex flex-col justify-items-start">
    //           <h1 className="font-extrabold text-blue-700">
    //             <PersonIcon /> Login
    //           </h1>
    //           <input
    //             type="text"
    //             placeholder="Email Address"
    //             className="border border-black m-2 p-2 rounded-xl lg:w-96 md:48"
    //           />

    //           <input
    //             type="password"
    //             placeholder="Password"
    //             className="border border-black m-2 p-2 rounded-xl lg:w-96"
    //           />

    //           <button className="border border-blue-950 rounded-xl m-2 p-2 bg-blue-400 w-24">Login</button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default Login;
