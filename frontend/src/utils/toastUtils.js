// src/utils/toastUtils.js
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export  const showToast = ({ message, type = "info", icon = null, position = "top-right" }) => {
    
  toast(message, {
    type,
    icon,
    position,
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};
