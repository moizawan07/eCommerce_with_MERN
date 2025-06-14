import Header from "../components/Header"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"
import AllProductsPrint from "../components/products/AllProductsPrint"
import CategoriesSorting from "../components/products/CategoriesSorting"
import SuggestedNav from "../components/SuggestedNav"


function Products() {
  let navigate = useNavigate(null)
  return (
    <>
    <Header />
      <SuggestedNav>
        <span onClick={() => navigate('/')} className="text-gray-500 mt-15 inline-block ml-20 cursor-pointer">Home / </span> 
        <span className="text-gray-900  cursor-pointer"> Products</span>
      </SuggestedNav>

       <AllProductsPrint />
     <Footer />  
    </>
  )
}

export default Products