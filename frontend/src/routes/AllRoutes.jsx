import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Products from '../pages/Products'
import About from '../pages/About'
import Contact from '../pages/Contact'
import PageNotFound from '../pages/PageNotFound'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/'        element={<Home />}/>
        <Route path='/signup'  element={<Signup />}/>
        <Route path='/login'   element={<Login />}/>
        <Route path='/products'element={<Products />}/>
        <Route path='/about'   element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*'        element={<PageNotFound />}/>
    </Routes>
  )
}

export default AllRoutes