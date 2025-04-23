import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Products from '../pages/Products'
import About from '../pages/About'
import Contact from '../pages/Contact'
import PageNotFound from '../pages/PageNotFound'
import AdminSignup from '../pages/AdminSignup'
import AdminLogin from '../pages/AdminLogin'
import AdminDashboard from '../pages/AdminDashboard'

function AllRoutes() {
  return (
    <Routes>
        <Route path='*'        element={<PageNotFound />}/>
        <Route path='/'        element={<Home />}/>
        <Route path='/signup'  element={<Signup />}/>
        <Route path='/login'   element={<Login />}/>
        <Route path='/products'element={<Products />}/>
        <Route path='/about'   element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        {/* Admin Signup & Login Route */}
        <Route path='/adminnnnnnnnnnsignup' element={<AdminSignup />}/>
        <Route path='/adminnnnnnnnnnlogin' element={<AdminLogin />}/>
        <Route path='/admin/dashboard' element={<AdminDashboard />}/>
    </Routes>
  )
}

export default AllRoutes