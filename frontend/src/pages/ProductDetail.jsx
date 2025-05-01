import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import SuggestedNav from "../components/SuggestedNav"
import ProductDetailCom from "../components/products/ProductDetailCom"


function ProductDetail() {
  let navigate = useNavigate(null)

  return (
  <>
  <Header/>
    <SuggestedNav>  
    <span onClick={() => navigate('/products')} className="text-gray-500 mt-15 inline-block ml-20 cursor-pointer">Products / </span> 
    <span className="text-gray-900  cursor-pointer"> Product Detail</span>
    </SuggestedNav>

    <ProductDetailCom />
  <Footer />
    
  </>
  )
}

export default ProductDetail