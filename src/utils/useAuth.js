import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const useAuth = (page) => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('token'));
    console.log(user)
  
    useEffect(() => {
      if (user) {
        navigate(page);
      } else {
        navigate("/");
        return;
      }
  
  }, []);
}