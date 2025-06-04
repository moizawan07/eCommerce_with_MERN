import { createContext, useEffect, useState } from "react";

let CardContext = createContext()

function CardContextProvider  ({children})  {
  let [cardItems,setCardItems] = useState([])
  let [wishlist,setWishlist] = useState([])

 
   // Jab component mount (refresh) ho localStorage se data lo aur State ma save kro loo
   useEffect(() => {
    const storedCart = localStorage.getItem('cardItems');
    
    if (storedCart) {
      setCardItems((previous) => [...previous, ...JSON.parse(storedCart)]);
    }

    let getWishItems = JSON.parse(window.localStorage.getItem('wishlistItems')) || [];
    setWishlist(getWishItems)
  }, []);


  // Jab bhi cartItems change ho, localStorage update karo 
  useEffect(() => {
    console.log("2 UseEffect Runn==>");
    localStorage.setItem('cardItems', JSON.stringify(cardItems));
  }, [cardItems]);



  return(
    <CardContext.Provider value={{cardItems,setCardItems, wishlist, setWishlist}}>
      {children}
    </CardContext.Provider>
)
}



export  {CardContext, CardContextProvider}