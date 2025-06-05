import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SuggestedNav from '../../components/SuggestedNav'
import ProfileSidebar from '../../components/Profile/ProfileSidebar'
import { useContext, useEffect, useState } from 'react'
import { CardContext } from '../../context/CardContext'
import ProductCard from '../../components/ProductCard'

function Wishlist() {
 let {wishlist} = useContext(CardContext)
 let [product, setProduct] = useState([])


 console.log("use effect run111==>", wishlist);
useEffect(() => {
    if(wishlist.length < 1) return;
     fetch('https://ecommercewithmern-production.up.railway.app/user/getWishlistItems', {
      method: 'POST',
      headers : {
        'authorization' : `bearer ${window.localStorage.getItem('token')}`,
        "Content-Type" : 'application/json',
      },
      body: JSON.stringify(wishlist) 
     })
     .then(res => {
       if(res.status != 200){
        throw new Error("Failed To Fetch");
       }
        return res.json()
      
     }).then(data => {
      setProduct(data.data)
     })

     .catch(err => console.log(err.message))

}, [wishlist])



  return (
    <>
    <Header />

    <SuggestedNav>
        <div className="flex justify-between mt-10 px-18 md:px-25">
        <p onClick={() => navigate('/')} className="text-gray-500   cursor-pointer">Home / 
            <span className='cursor-pointer text-gray-900 ml-2'>Profile</span>
        </p> 
        <p>Wishlist <span className='text-red-500 capitalize'>Items!</span></p>
        </div>
    </SuggestedNav>

    
       <div className="flex justify-center items-start  w-full px-5 md:pl-25 py-20">
          <ProfileSidebar />
         <div className='w-full md:w-[1215px] flex  gap-3 pl-8 '>
           {product.length > 0 ?
            product.map(product => (
             <ProductCard
              key={product._id}
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
            )): <p>Not add any Wish List Items</p>}
         </div>
       </div>

   <Footer />
    </>
  )
}

export default Wishlist