import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Products from '../pages/Products'
import About from '../pages/About'
import Contact from '../pages/Contact'
import PageNotFound from '../pages/PageNotFound'
import Cart from '../pages/Cart'
import ProtectedRoute from '../components/ProtectedRoute'
import EditProfile from '../pages/userProfile/EditProfile'

// import AdminSignup from '../pages/admin/AdminSignup'
import AdminLogin from '../pages/admin/AdminLogin'
import AdminDashboard from '../pages/admin/AdminDashboard'
import AdminProtectedRoute from '../components/Admin/AdminProtectedRoute'
import ProductDetail from '../pages/ProductDetail'
import EmployeSignup from '../pages/employe/EmployeSignup'
import EmployeLogin from '../pages/employe/EmployeLogin'
import EmployeDashoard from '../pages/employe/EmployeDashoard'
import AdminUsers from '../pages/admin/AdminUsers'
import AdminProducts from '../pages/admin/AdminProducts'
import AdminCreateProduct from '../pages/admin/AdminCreateProduct'
import UserOrders from '../pages/userProfile/UserOrders'



function AllRoutes() {
  return (
  <BrowserRouter>
    <Routes>
         {/*  Users Routes */}
        <Route path='*'        element={<PageNotFound />}/>
        
        <Route path='/'        element={<Home />}/>
        
        <Route path='/signup'  element={<Signup />}/>
        
        <Route path='/login'   element={<Login />}/>
        
        <Route path='/about'   element={<About />}/>
        
        <Route path='/contact' element={<Contact />}/>
        
        <Route path='/cart'    element={<ProtectedRoute> <Cart /> </ProtectedRoute>}/>

        <Route path='/products'element={<Products />}/>

        <Route path='/productDetail/:productId'element={<ProductDetail />}/>

        <Route path='/userProfile'element={<ProtectedRoute> <EditProfile /></ProtectedRoute>} />
        
        <Route path='/userOrders'element={<ProtectedRoute> <UserOrders /></ProtectedRoute>} />





        {/* Admin Routes */}
        {/* <Route path='/admin/signup' element={<AdminSignup />}/> */}
        <Route path='/admin/login'     element={<AdminLogin />}/>
        <Route path='/admin/dashboard' element={<AdminProtectedRoute>     <AdminDashboard /> </AdminProtectedRoute>}/>
        <Route path='/admin/users'     element={<AdminProtectedRoute>     <AdminUsers /> </AdminProtectedRoute>}/>
        <Route path='/admin/products'  element={<AdminProtectedRoute>     <AdminProducts /> </AdminProtectedRoute>}/>
        <Route path='/admin/create/product'element={<AdminProtectedRoute> <AdminCreateProduct /> </AdminProtectedRoute>}/>



        {/* Employe Route */}
        <Route path='/employe/signup' element={<EmployeSignup />}/>
        <Route path='/employe/login'  element={<EmployeLogin />}/>
        <Route path='/employe/dashboard'      element={<EmployeDashoard />}/>

    </Routes>
  </BrowserRouter>  
  )
}

export default AllRoutes