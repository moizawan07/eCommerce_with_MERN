import { useState, useEffect } from 'react'
import ProductCard from '../ProductCard'
import FlashSaleHeader from '../Home/FlashSaleHeader'
import CategoryCard from "./CategoryCard";
// Icons

import { TfiMobile } from "react-icons/tfi"
import { TbDeviceWatchExclamation } from "react-icons/tb";
import { CiCamera } from "react-icons/ci";
import { AiOutlineDesktop } from 'react-icons/ai';
import { CiHeadphones } from "react-icons/ci";
import { PiGameControllerThin } from "react-icons/pi";

function AllProductsPrint() {
  const categories = [
    { name: 'Phones', icon: TfiMobile},
    { name: 'Laptops', icon: AiOutlineDesktop},
    { name: 'Smart Watch', icon: TbDeviceWatchExclamation},
    { name: 'Camera', icon: CiCamera},
    { name: 'HeadPhones', icon: CiHeadphones },
    { name: 'Gaming', icon: PiGameControllerThin},
]
// Stored all Getting products in this State
  let [products, setProducts] = useState(null)

  // Category sorting function 
  const categorySort = (category) => {
   setProducts(category)
  }

  // Get all Products in the database
  useEffect(() => {

   fetch('http://localhost:3000/product/getProducts')
   .then(res => res.json())
   .then(data => setProducts(data.products))
   .catch(err => alert(err.message))
  
   
  } ,[])
  

  return (

    <>
    <FlashSaleHeader title="Categories" description="Browse by Category" />

    {/* Categories Print Like Mobile Tablets Headphones Us ka Mian Div */}
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">

          {categories.map((category, index) => (
            <CategoryCard key={index} {...category}  onCardCliked ={categorySort} />
          ))}

        </div>
      </div>
    </div>


    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[15px] gap-y-[40px] px-10 mt-10  mb-25'>

      {products ? 
        products.map((product, index) => {

          return <ProductCard
          key={index} 
          title=    {product.title} 
          imageUrl= {product.imageUrl}
          oldPrice= {product.oldPrice}
          newPrice= {product.newPrice} 
          reviews=  {product.reviews} 
          rating=   {product.rating}
          inStock=   {product.inStock}
           />
        }) : <p>Loading...</p>
      }

    </div>

    </>
  )
}

export default AllProductsPrint