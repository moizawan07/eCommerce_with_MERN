import { createContext, useEffect, useState } from "react";

let CardContext = createContext()

function CardContextProvider  ({children})  {
  let [cardItems,setCardItems] = useState([])
  let [cardNumber,setCardNumber] = useState(0)

  // console.log("CardItems State ==>", cardItems);
  
   // Jab component mount (refresh) ho localStorage se data lo aur State ma save kro loo
   useEffect(() => {
    const storedCart = localStorage.getItem('cardItems');
    const storedCartNumber = parseInt(localStorage.getItem('cardNumber'));
    // console.log("localstorage array", storedCart);
    
    if (storedCart) {
      setCardItems((previous) => [...previous,...JSON.parse(storedCart)]);
      setCardNumber((previous) => previous || storedCartNumber);
    }
  }, []);


  // Jab bhi cartItems change ho, localStorage update karo 
  useEffect(() => {
    // console.log("2 UseEffect Runn==>");
    localStorage.setItem('cardItems', JSON.stringify(cardItems));
    localStorage.setItem('cardNumber', cardNumber);
  }, [cardItems]);



  return(
    <CardContext.Provider value={{cardItems,setCardItems, cardNumber, setCardNumber}}>
      {children}
    </CardContext.Provider>
)
}



export  {CardContext, CardContextProvider}