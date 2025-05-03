import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // const navigate = useNavigate();
  // // const [isAuth, setIsAuth] = useState(null); // null: loading

  // useEffect(() => {
  //   const token = window.localStorage.getItem("token");
  //   if (token) {
  //     setIsAuth(true);
  //   } else {
  //     setIsAuth(false);
  //     navigate("/login");
  //   }
  // }, [navigate]);

  // if (isAuth === null) return <p>Loading...</p>; // Optional: spinner ya loader

  let token = window.localStorage.getItem('token')
    

  return token ? children : <Navigate to='/login' />;
}

export default ProtectedRoute;
