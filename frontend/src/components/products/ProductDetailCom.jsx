import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'


const ProductDetail = () => {
   const [productValue , setProductValue] = useState() 
   const {productId} = useParams()

   console.log("rff", productId);
   
 useEffect(() => {
   fetch('http://localhost:3000/product/productDetail',{
    method : 'POST',
    headers: {'Content-Type' : 'application/json'},
    body:JSON.stringify({id : productId})
   })
   .then(res => res.json())
   .then(data => setProductValue(data.data))
   .catch(err => alert(err.message))
 
 }, [])
 

  return (
   productValue ? <div className="flex flex-col md:flex-row gap-6 p-4 md:p-10 max-w-7xl mx-auto">
      {/* Left Side Images */}
      <div className="flex md:flex-col gap-2 w-full md:w-auto">
        {[0,1,2,3].map((_, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-xl shadow-md bg-white p-2 h-24 w-24 md:h-28 md:w-28 cursor-pointer
              ${index === 1 ? "md:self-center" : index === 2 ? "md:self-end" : "md:self-start"}`}
          >
            <img
              src={productValue.imageUrl}
              alt="product"
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={productValue.imageUrl}
          alt="Main product"
          className="object-contain w-full max-w-md rounded-xl"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-semibold">{productValue.title}</h2>
        <div className="flex items-center space-x-2 text-yellow-500">
          <span>⭐⭐⭐⭐</span>
          <span className="text-gray-500 text-sm">({productValue.reviews})</span>
          <span className="text-green-600 text-sm ml-2">In Stock</span>
        </div>

        <p className="text-2xl font-bold">{productValue.newPrice}</p>
        <p className="text-gray-600">
          {productValue.title} Skin High quality vinyl with air channel adhesive
          for easy bubble free install & mess free removal. Pressure sensitive.
        </p>

        {/* Colours */}
        <div className="space-y-2">
          <h4 className="font-medium">Colours:</h4>
          <div className="flex gap-3">
            <span className="h-5 w-5 rounded-full bg-blue-500 border-2 border-black cursor-pointer"></span>
            <span className="h-5 w-5 rounded-full bg-red-400 cursor-pointer"></span>
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-2">
          <h4 className="font-medium">Size:</h4>
          <div className="flex gap-2">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`px-4 py-1 border rounded-md ${
                  size === "M" ? "bg-red-500 text-white" : "bg-white text-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity and Buy Button */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center border rounded-md overflow-hidden">
            <button className="px-3 py-1">-</button>
            <span className="px-4 py-1">2</span>
            <button className="px-3 py-1">+</button>
          </div>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md">Buy Now</button>
          <button className="text-gray-600 text-2xl">♡</button>
        </div>

        {/* Delivery Info */}
        <div className="mt-6 space-y-3">
          <div className="border p-4 rounded-md">
            <h4 className="font-semibold mb-1">Free Delivery</h4>
            <input
              type="text"
              placeholder="Enter your postal code for Delivery Availability"
              className="w-full border rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div className="border p-4 rounded-md">
            <h4 className="font-semibold mb-1">Return Delivery</h4>
            <p className="text-sm text-gray-600">
              Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span>
            </p>
          </div>
        </div>
      </div>
    </div> : <p> Loading... </p>
  );
};

export default ProductDetail;