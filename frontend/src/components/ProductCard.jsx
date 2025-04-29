import React, { useContext, useState } from "react";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../context/CardContext";

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
  
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(null)
  const {cardItems , setCardItems, setCardNumber} = useContext(CardContext)


  const addToCard = async () => {
    console.log("Product id ===>", _id);
    console.log("Card Items [] ===>", cardItems);
    
    
    // Now Set The Product Document Id In CardItems State
    // If Already added So remove like an toogle work i doo here

     let alreadyAdd = cardItems.findIndex(item => item === _id)
    
     
// If number >= 0 means already add huwa wa so remove it 
     if(alreadyAdd >= 0){
       cardItems.splice(alreadyAdd, 1)
       setCardItems([...cardItems])
      return setCardNumber((previous) => previous - 1)
      }

// if number not >= 0 means not add it Before so add it
    
      setCardItems([...cardItems, _id])
      setCardNumber((previous) => previous + 1)

      
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
          <button className="bg-white rounded-full p-2 text-gray-500 hover:text-gray-700 shadow-sm">
            <AiFillHeart size={16} />
          </button>
        </div>

        {/* Eye Icon  */}
        <div className="absolute top-12 right-2 z-10">
          <button className="bg-white rounded-full p-2 text-gray-500 hover:text-gray-700 shadow-sm">
            <AiOutlineEye onClick={() => navigate('/productDetail')} size={16} />
          </button>
        </div>

        {/* Add To Cart Button (Hover Effect) */}
        <button
          className={`bg-${cardItems.includes(_id) ? 'red-500' : 'black'}
           text-white w-full py-3 transition ${
            isHovered ? "block" : "hidden"}
           disabled:opacity-50`}
           disabled={btnHide || !inStock} // This Condition Bcuz Card Ye Card Static Jaga Be use Ho rha And Products Page Pa be
           onClick={addToCard}
        >
          <AiOutlineShoppingCart
            className="inline-block mr-2 align-middle"
            size={20}
          />
         {cardItems.includes(_id) ?  'Remove To Cart' : ' Add To Cart'}
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between">
        <h3 className="text-sm text-gray-700 font-semibold mb-2">{title}</h3>
        <p className="text-[12px] text-[#c62d03] font-semibold">{!inStock && "Out of Stock"}</p>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-gray-600 line-through text-xs mr-2">
            Rs {oldPrice}
          </span>
          <span className="text-red-500 font-semibold text-sm">
            Rs {newPrice}
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
