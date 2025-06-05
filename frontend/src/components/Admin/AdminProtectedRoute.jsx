import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Home from "../../pages/Home";

const AdminProtectedRoute = ({ children }) => {
  const [authorized, setAuthorized] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    fetch('https://ecommercewithmern-production.up.railway.app/admin/coming/dashboard', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then(() => setAuthorized(true))
      .catch(() => {
        setAuthorized(false);
        navigate('/');
      });
  }, []);


 
  return  authorized && children;
};

export default AdminProtectedRoute;
