import SuggestedNav from "../components/SuggestedNav"


function ProductDetail() {


  return (
  <>
    <SuggestedNav>  
    <span onClick={() => navigate('/products')} className="text-gray-500 mt-15 inline-block ml-20 cursor-pointer">Products / </span> 
    <span className="text-gray-900  cursor-pointer"> Product Detail</span>
    </SuggestedNav>

    
  </>
  )
}

export default ProductDetail