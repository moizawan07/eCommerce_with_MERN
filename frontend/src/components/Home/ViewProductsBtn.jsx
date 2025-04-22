import {useNavigate} from "react-router-dom"

function ViewProductsBtn() {

  let navigate = useNavigate()

  return (
    <div className="mt-8 text-center">
    <button onClick={() => navigate('/products')} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md">
      View All Products
    </button>
  </div>
  )
}

export default ViewProductsBtn