import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SuccessToast = ({ message }) => {
    console.log('message---', message)
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000, // Auto close after 3 seconds
    hideProgressBar: true, // Hide progress bar
    closeOnClick: true, // Close on click
    pauseOnHover: true, // Pause on hover
    draggable: true, // Make draggable
  });

  return null; // Toast component does not render anything
};

export default SuccessToast;
