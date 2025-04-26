import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Products from '../pages/Products'
import About from '../pages/About'
import Contact from '../pages/Contact'
import PageNotFound from '../pages/PageNotFound'
// import AdminSignup from '../pages/admin/AdminSignup'
import AdminLogin from '../pages/admin/AdminLogin'
import AdminDashboard from '../pages/admin/AdminDashboard'
import ProductDetail from '../pages/ProductDetail'
import EmployeSignup from '../pages/employe/EmployeSignup'
import EmployeLogin from '../pages/employe/EmployeLogin'
import EmployeDashoard from '../pages/employe/EmployeDashoard'

function AllRoutes() {
  return (
    <Routes>
         {/* Users Routes */}
        <Route path='*'        element={<PageNotFound />}/>
        <Route path='/'        element={<Home />}/>
        <Route path='/signup'  element={<Signup />}/>
        <Route path='/login'   element={<Login />}/>
        <Route path='/about'   element={<About />}/>
        <Route path='/contact' element={<Contact />}/>

        {/* Products Routes */}
        <Route path='/products'element={<Products />}/>
        <Route path='/productDetail'element={<ProductDetail />}/>


        {/* Admin Route */}
        {/* <Route path='/admin/signup' element={<AdminSignup />}/> */}
        <Route path='/admin/login' element={<AdminLogin />}/>
        <Route path='/admin/dashboard' element={<AdminDashboard />}/>


        {/* Employe Route */}
        <Route path='/employe/signup' element={<EmployeSignup />}/>
        <Route path='/employe/login'  element={<EmployeLogin />}/>
        <Route path='/employe/dashboard'      element={<EmployeDashoard />}/>

    </Routes>
  )
}

export default AllRoutes