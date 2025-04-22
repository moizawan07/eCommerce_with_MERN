import Login from "../pages/Login"


function ProtectedRoute({children}) {
  
    let token = window.localStorage.getItem('token')

    return token ? children : <Login />
 
}

export default ProtectedRoute