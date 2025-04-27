import { useEffect } from "react"
import Home from '../../pages/Home'

const AdminProtectedRoute = ({children}) => {
  let token = window.localStorage.getItem('token')

  useEffect(() => {
    fetch('http://localhost:3000/admin/dashboardCome', {
      method : 'GET',
      headers : {'Authorization' : `bearer ${window.localStorage.getItem('token')}`},
    })
    .then(res => {
      if(res.status != 200) throw new Error("Role UnAuthorized");
      return res.json()
    })
    .then(data =>  children)
    .catch(err => <Home />)
  }, [])

}

module.exports = AdminProtectedRoute