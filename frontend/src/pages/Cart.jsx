import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SuggestedNav from '../components/SuggestedNav'
import CartFullData from '../components/Cart/CartfullData'

function Cart() {
    let navigate = useNavigate(null)
  return (
    <>
    <Header />

    <SuggestedNav>
        <span onClick={() => navigate('/')} className="text-gray-500 mt-15 inline-block ml-20 cursor-pointer">Home / </span> 
        <span className="text-gray-900 cursor-pointer"> Cart</span>
    </SuggestedNav>

    <CartFullData />
    <Footer />
    </>
  )
}

export default Cart