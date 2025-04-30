import { createContext, useEffect, useState } from "react";

let CardContext = createContext()

function CardContextProvider  ({children})  {
  let [cardItems,setCardItems] = useState([])

 
   // Jab component mount (refresh) ho localStorage se data lo aur State ma save kro loo
   useEffect(() => {
    const storedCart = localStorage.getItem('cardItems');
    
    if (storedCart) {
      setCardItems((previous) => [...previous, ...JSON.parse(storedCart)]);
    }
  }, []);


  // Jab bhi cartItems change ho, localStorage update karo 
  useEffect(() => {
    console.log("2 UseEffect Runn==>");
    localStorage.setItem('cardItems', JSON.stringify(cardItems));
  }, [cardItems]);



  return(
    <CardContext.Provider value={{cardItems,setCardItems}}>
      {children}
    </CardContext.Provider>
)
}



export  {CardContext, CardContextProvider}