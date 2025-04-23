import { useState, useEffect } from 'react'
import ProductCard from '../ProductCard'

function AllProductsPrint() {
  let [products, setProducts] = useState(null)

console.log("products === >", products);

  useEffect(() => {

   fetch('http://localhost:3000/product/getProducts')
   .then(res => res.json())
   .then(data => setProducts(data.products))
   .catch(err => alert(err.message))
  
   
  } ,[])
  

  return (
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
           />
        }) : <p>Loading...</p>
      }

    </div>
  )
}

export default AllProductsPrint