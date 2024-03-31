import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { addUser, removeUser } from "../utils/userSlice";
import { socket } from "../components/Shared/socket/socketConfig";
import toast from "react-hot-toast";
import { loginForm } from "../components/Auth/validation/auth";

const useLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      });
    } catch (error) {
      console.error("Login failed:", error.status);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user) {
      navigate("/home");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  }, []);

  return {
    
    setEmail,
    setPassword,
    handleLogin,
  };
};

export default useLogin;
