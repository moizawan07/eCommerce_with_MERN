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
import { t } from 'i18next';

function AllProductsPrint() {
  const categories = [
    { name: t('categorySorting.first'), icon: TfiMobile, categoryName : 'phones'},
    { name: t('categorySorting.second'), icon: AiOutlineDesktop, categoryName : 'laptops'},
    { name: t('categorySorting.third'), icon: TbDeviceWatchExclamation,  categoryName : 'smart watch'},
    { name: t('categorySorting.fourth'), icon: CiCamera,  categoryName : 'camera'},
    { name: t('categorySorting.fifth'), icon: CiHeadphones,  categoryName : 'headphones'},
    { name: t('categorySorting.six'), icon: PiGameControllerThin,  categoryName : 'gaming'},
]
// Stored all Getting products in this State
  let [products, setProducts] = useState(null)

  // Category sorting function 
  const categorySort = (category) => {
   setProducts(category)
  }

  // Get all Products in the database
  useEffect(() => {

   fetch('https://ecommercewithmern-production.up.railway.app/product/getProducts')
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


    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[15px] gap-y-[40px] px-6 mt-10  mb-25'>

      {products ? 
        products.map((product, index) => {

          return <ProductCard
          key={index}
          _id=       {product._id} 
          title=    {product.title} 
          imageUrl= {product.imageUrl}
          oldPrice= {product.oldPrice}
          newPrice= {product.newPrice} 
          reviews=  {product.reviews} 
          rating=   {product.rating}
          inStock=   {product.inStock}
          discount=  {product.discount}
          category=  {product.category}
           />
        }) :  <div className='w-[1250px] flex justify-center mt-10'><div className="loader"></div> </div>
      }

    </div>

    </>
  )
}

export default AllProductsPrint