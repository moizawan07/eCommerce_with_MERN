import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CardContext } from '../../context/CardContext';

const CartPage = () => {
  const [product, setProduct] = useState([]);
  let {cardItems,setCardItems, cardNumber, setCardNumber} = useContext(CardContext)

  useEffect(() => {
     fetch('http://localhost:3000/user/addToCard', {
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
      
     }).then(data => setProduct(data))
     .catch(err => alert(err.message))
  }),[]
  
  

  return (
    <div className="container mx-auto p-4 mt-5">
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
            {product.length > 0 && 
            product.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100 transition duration-200"> 
                <td className="py-4 px-4 flex items-center relative group border-b border-gray-200"> 
                  <div className="relative w-20 h-20 mr-4 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <button
                      className="absolute top-1 left-1 bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ fontSize: '12px' }}
                    >
                      <AiOutlineClose size={12} /> 
                    </button>
                  </div>
                  <span>{item.name}</span>
                </td>
                <td className="py-4 px-4 border-b border-gray-200">${item.price}</td> 
                <td className="py-4 px-4 border-b border-gray-200"> 
                  <div className="flex items-center border border-gray-300 rounded w-24"> 
                    <button className="px-2 py-1 focus:outline-none">-</button>
                    <input
                      type="number"
                      min="1"
                      className="w-12 text-center focus:outline-none appearance-none" 
                    />
                    <button className="px-2 py-1 focus:outline-none">+</button>
                  </div>
                </td>
                <td className="py-4 px-4 border-b border-gray-200">${item.price * item.quantity}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     {/* Bottom Section (Corrected Layout) */}
    
        {/* First Row: Return To Shop and Update Cart Buttons */}
        <div className="flex justify-between mb-4 mt-5 px-2">
          <button className="border border-gray-400 rounded px-6 py-3 text-sm mr-4">
            Return To Shop
          </button>
          <button className="border border-gray-400 rounded px-6 py-3 text-sm">
            Update Cart
          </button>
        </div>

        {/* Second Row: Coupon Code and Cart Total */}
        <div className="flex flex-col md:flex-row w-full justify-between px-2 mt-20 mb-25 items-start md:items-start">
          <div className="flex items-center mb-4 md:mb-0 md:mr-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-gray-400 rounded px-4 py-3 text-sm w-78 focus:outline-none"
            />
            <button className="bg-red-500 text-white rounded px-10 py-3 text-sm ml-2">
              Apply Coupon
            </button>
          </div>

          <div className="border border-gray-300 rounded px-5 py-4 w-[484px] ">
            <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
            <div className="flex justify-between mb-1">
              <span className="text-sm py-3.5">Subtotal:</span>
              <span className="text-sm py-3.5">$1750</span>
            </div>
            <div className="flex justify-between mb-1 border-t border-gray-300">
              <span className="text-sm py-3.5">Shipping:</span>
              <span className="text-sm py-3.5">Free</span>
            </div>
            <div className="border-t border-gray-300 py-3.5 flex justify-between font-semibold">
              <span className="text-sm py-2">Total:</span>
              <span className="text-sm py-2">$1750</span>
            </div>
            <button className="bg-red-500 text-white rounded px-6 py-3 mt-4 w-full text-sm">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default CartPage;