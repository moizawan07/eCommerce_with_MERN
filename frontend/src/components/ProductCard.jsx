import React, { useContext, useState } from "react";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../context/CardContext";
import { toast } from "react-toastify";
import { t } from "i18next";

const DameCards = ({
  _id,
  title,
  discount,
  imageUrl,
  oldPrice,
  newPrice,
  rating,
  reviews,
  btnHide,
  inStock,
  category
}) => {
  const rate = parseFloat(t("currencyRate")); // Convert to number
  // console.log("rate ==>", rate);
  // console.log("converedPrice ==>", convertedPrice);
  

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(null)
  const {cardItems , setCardItems} = useContext(CardContext)
  const {wishlist, setWishlist} = useContext(CardContext)
  
  
  
  // ----- Add To Card Work Here ----
const addToCard = async () => {
    let token = window.localStorage.getItem('token')
    if(!token) return navigate('/login')
    
    // Now Set The Product Document Id In CardItems State
    // If Already added So remove like an toogle work i doo here
    
    let alreadyAdd = cardItems.findIndex(item => item === _id)
    
    
    // If number >= 0 means already add huwa wa so remove it 
    if(alreadyAdd >= 0){
      toast.success('Remove to Cart Sucessfully', {position : 'bottom-right'})
      cardItems.splice(alreadyAdd, 1)
      return setCardItems([...cardItems])
    }

// if number not >= 0 means not add it Before so add it
    
      setCardItems([_id, ...cardItems])

      toast.success('Add To Card Sucessfully')
      
}

// Wishlist Done 
const wishlishDone = () => {
    let storedWishItems = JSON.parse(window.localStorage.getItem('wishlistItems')) || []
//  Toggle Items already add so remove otherwise add it
let addIt = storedWishItems.findIndex((e) => e === _id)

if(addIt != '-1') {
  storedWishItems.splice(addIt, 1)
  toast.success('Remove From wishlist', {position : 'top-left'})
}
else{
  storedWishItems.push(_id)
  toast.success('Add From wishlist', {position : 'top-right'})
}

setWishlist(storedWishItems)
  
window.localStorage.setItem('wishlistItems', JSON.stringify(storedWishItems))
}


  return (
    <div
      className="rounded-md shadow-md overflow-hidden flex flex-col relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded-md z-10">
          {discount}
        </div>
      )}

      {/* Image and Overlay */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-52 object-cover transition-opacity duration-300 rounded"
          style={{ opacity: isHovered ? 0.8 : 1 }}
        />

        <div className="absolute top-2 right-2 z-10">
          <button className={`bg-white rounded-full p-2  hover:text-red-500 shadow-sm
          ${wishlist.includes(_id) ? 'text-red-500' : 'text-gray-700'}`}
          onClick={wishlishDone}>
            <AiFillHeart size={16} />
          </button>
        </div>

        {/* Eye Icon  */}
      {!btnHide && (
         <div className="absolute top-12 right-2 z-10">
           <button className="bg-white rounded-full p-2 text-gray-500 hover:text-gray-700 shadow-sm">
            <AiOutlineEye
              onClick={() => navigate(`/productDetail/${_id}`)} 
            size={16}
            />
           </button>
         </div>
        )}  

        {/* Add To Cart Button (Hover Effect) */}
        <button
          className={`bg-${cardItems.includes(_id) ? 'red-500' : 'black'}
           text-white w-full py-3 transition ${
            isHovered ? "block" : "hidden"}
           disabled:opacity-40`}
           disabled={btnHide || !inStock} // This Condition Bcuz Card Ye Card Static Jaga Be use Ho rha And Products Page Pa be
           onClick={addToCard}
        >
          <AiOutlineShoppingCart
            className="inline-block mr-2 align-middle"
            size={20}
          />
         {cardItems.includes(_id) ?  t("removeToCart") : t("addToCart")}
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between">
        <h3 className="text-sm text-gray-700 font-semibold mb-2">{title}</h3>
        <p className="text-[12px] text-red-600">{!inStock && t('outOfStock')}</p>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-gray-600 line-through text-xs mr-2">
            {t("currencySymbol") + " " +  Math.round(oldPrice * rate).toFixed(2)}
          </span>
          <span className="text-red-500 font-serif text-sm">
            {t('currencySymbol') + " " +  Math.round(newPrice * rate).toFixed(2)}
          </span>
        </div>

        {/* Ratings Stars Print */}
        <div className="flex items-center mt-auto">
          <div className="flex text-yellow-500 text-sm mr-1">
            {Array.from({ length: Math.floor(rating) }).map((_, index) => (
              <FaStar key={index} className="mr-0.5" />
            ))}
          </div>

          <span className="text-gray-500 text-xs">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default DameCards;
