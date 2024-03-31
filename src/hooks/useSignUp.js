import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/authService";
import toast from "react-hot-toast";
import { validateSignUpForm } from "../components/Auth/validation/auth";

const useSignUp = () => {
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const [retypePassword, setRetypePassword] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const navigate = useNavigate();

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const formValidationMsg = await validateSignUpForm({email, password,retypePassword,  first_name, last_name, mobile, dob, gender });
      if(formValidationMsg) {
        return toast.error(formValidationMsg)
      }
      const response = await signup({ email, password, first_name, last_name, mobile, dob, gender });
      // if (password !== retypePassword) {
      //   toast.error('Passwords do not match');
      // } else {
        // Assuming the login API returns user data
      const userData = response;
      console.log(userData)
      if(userData){
        const regex = /^(4|5)\d{2}$/;
        const str = userData?.statusCode?.toString();
        let m;

        if ((m = regex.exec(str)) !== null) {
          toast.error(userData?.message)
           
        }else{
          navigate('/');
          setSuccessMessage(userData.message)
          toast.success(userData.message)
        }
       
      }
      
      // }
      
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error(error.message)
    }
  }

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

  return {
    handleGenderChange,
    handleSignup,
    handlePasswordChange,
    handleRetypePasswordChange,
    setEmail,
    setFirstName,
    setLastName,
    setMobile,
    setDob,
    gender,
    email,
    password,
    retypePassword,
    first_name,
    last_name,
    mobile,
    dob,
    successMessage,
  };
};

export default useSignUp;
