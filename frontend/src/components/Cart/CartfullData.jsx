import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CardContext } from '../../context/CardContext';
import { HiOutlineMinus } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import Celebration from './Celebration';
import BillingDetails from './BillingDetail';

const CartPage = () => {

  const [product, setProduct] = useState([])
  let  [getProducts, setGetProducts] = useState(true)
  let  [orderDone, setOrderDone] = useState(false)
  let [modal, setModal] = useState(false)
  let  {cardItems, setCardItems} = useContext(CardContext)
  let navigate = useNavigate(null)

  console.log("product ==>", product);
  
  useEffect(() => {
    // console.log("use effect run==>", cardItems);
    if(cardItems.length < 1) return;
     fetch('https://ecommercewithmern-production.up.railway.app/user/addToCard', {
      method: 'POST',
      headers : {
        'authorization' : `bearer ${window.localStorage.getItem('token')}`,
        "Content-Type" : 'application/json',
      },
      body: JSON.stringify(cardItems) 
     })
     .then(res => {
       if(res.status != 200){
        throw new Error("Failed To Fetch");
       }
        return res.json()
      
     }).then(data => {
      let allProducts = data.data.map(product => ({...product, quanity : 1}))
      setProduct(allProducts)
      
     })

     .catch(err => console.log(err.message))

  }, [getProducts])


  // Product Remove With The Card
  function addToCardRemove (productId){
    console.log("product id", productId);

  let updatedProducts = cardItems.filter(item  => item !== productId)

  // console.log("updatedProducts", updatedProducts);
  
   
   setCardItems(updatedProducts)
   setGetProducts(!getProducts)
    
  }
  
  // Product Quanity Increment 
  function increment (id,) {
    let productsss = product.map(pro => {

      if(pro._id === id){
          if(pro.quanity < 10){
            return ({...pro, quanity : pro.quanity + 1})
          }
        return pro
      }
       
       return pro
     
  })

    setProduct(productsss)
    
  }


  // Product Quanity Dncrement 
  function decrement (id,) {
    let productsss = product.map(pro => {

      if(pro._id === id){
          if(pro.quanity > 1){
            return ({...pro, quanity : pro.quanity - 1})
          }
        return pro
      }
       
       return pro
     
  })

    setProduct(productsss)
    
  }
  
  // Products Total price Calculates
  let totalPrice;
  if(product.length > 0){
     totalPrice = product.reduce((acc, item) => {
     return item.newPrice * item.quanity + acc
    },0)
  }
  
  
  return(orderDone ? <Celebration /> : 
     product.length > 0 ? (
     <div className="container mx-auto p-1.5 md:p-4 mt-5">
      <div className="overflow-x-auto rounded-md shadow">
        <table className="table-auto w-full border-collapse"> 
          <thead className="bg-gray-50"> 
            <tr className="text-left">
              <th className="py-6 px-4 font-semibold text-sm">Product</th>
              <th className="py-6 px-4 font-semibold text-sm">Price</th>
              <th className="py-6 px-4 font-semibold text-sm">Quantity</th>
              <th className="py-6 px-4 font-semibold text-sm">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item) => (
              <tr key={item._id} className="hover:bg-gray-100 transition duration-200"> 
                <td className="py-4 px-4 flex items-center relative group border-b border-gray-200"> 
                  <div className="relative w-20 h-20 mr-4 overflow-hidden">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                    <button
                      className="absolute top-1 left-1 bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ fontSize: '12px' }}
                      onClick={() => addToCardRemove(item._id)}
                    >
                      <AiOutlineClose size={12} /> 
                    </button>
                  </div>
                  <span>{item.title}</span>
                </td>
                <td className="py-4 px-4 border-b border-gray-200">Rs:{item.newPrice}</td> 

                <td className="py-4 px-4 border-b border-gray-200"> 
                  <div className="flex justify-between items-center border px-1 cursor-pointer border-gray-300 rounded w-22 py-2"> 
                    <HiOutlineMinus 
                    className="pl-1 text-[17px]"
                    onClick={() => decrement(item._id)}
                    />
                    <p className='font-light'>
                    {item.quanity}
                    </p>
                    <BsPlusLg 
                    className="pr-1 text-[17px]"
                    onClick={() => increment(item._id)}
                    />
                  </div>
                </td>
                <td className="py-4 px-4 border-b border-gray-200">Rs:{item.newPrice * item.quanity}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     {/* Bottom Section (Corrected Layout) */}
    
        {/* First Row: Return To Shop and Update Cart Buttons */}
        <div className="flex justify-evenly md:justify-between mb-4 mt-5 px-2">
          <button onClick={() => navigate('/products')} className="border hover:bg-red-500 hover:border-none hover:text-white border-gray-400 rounded px-2 md:px-6 py-3 text-sm mr-4">
            Return To Shop
          </button>
          <button className="border border-gray-400 rounded px-2 md:px-6 py-3 text-sm">
            Update Cart
          </button>
         </div>

        {/* Second Row: Coupon Code and Cart Total */}
        <div className="flex  flex-col md:flex-row w-full md:justify-between px-2 mt-20 mb-25  md:items-start">
          <div className=" w-full flex flex-col gap-3 md:flex-row md:gap-0 items-center mb-4 md:mb-0 md:mr-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-gray-400 rounded px-4 py-3 text-sm w-full md:w-78 focus:outline-none"
            />
            <button className="bg-red-500 w-full md:w-auto text-white rounded md:px-10 py-3 text-sm ml-2">
              Apply Coupon
            </button>
          </div>

          <div className="border border-gray-300 rounded px-2.5 md:px-5 py-4 w-full md:w-[564px]">
            <h2 className="md:text-lg font-semibold mb-4">Cart Total</h2>
            <div className="flex justify-between mb-1">
              <span className="text-sm py-3.5">Subtotal:</span>
              <span className="text-sm py-3.5">
               Rs:{totalPrice}
              </span>
            </div>
            <div className="flex justify-between mb-1 border-t border-gray-300">
              <span className="text-sm py-3.5">Shipping:</span>
              <span className="text-sm py-3.5">Free</span>
            </div>
            <div className="border-t border-gray-300 py-3.5 flex justify-between font-semibold">
              <span className="text-sm py-2">Total:</span>
              <span className="text-sm py-2">Rs:{totalPrice}</span>
            </div>
            <button className="bg-red-500 text-white rounded px-6 py-3 mt-4 w-full text-sm"
            onClick={() => setModal(true)}
            >
              Proceed to checkout
            </button>
          </div>
        </div>

        {/* Billing Details Compoent call */}
       {modal &&  <BillingDetails 
       modaal = {setModal}
       cardProucts= {{product, setProduct}}
       orderState= {{orderDone, setOrderDone}}
         
       />}
     </div>
  ): <EmptyCart/>)
}

export default CartPage;






// Empty Card Message Show Compoenent
import { FiShoppingCart } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom'; 


function EmptyCart () {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="bg-red-100 text-red-500 p-6 rounded-full mb-6 shadow-md">
        <FiShoppingCart size={50} />
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Your Cart is Empty</h2>
      <p className="text-gray-600 text-sm md:text-base mb-6 max-w-md">
        Looks like you haven’t added anything to your cart yet. Explore our products and find something you like!
      </p>
      <Link to="/products" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition duration-200 text-sm">
        Return to Shop
      </Link>
    </div>
  );
};


