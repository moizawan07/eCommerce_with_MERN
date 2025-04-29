import { createContext, useState } from "react";

let CardContext = createContext()

function CardContextProvider  ({children})  {
  let [name,setName] = useState('Moiz')

  return(
    <CardContext.Provider value={{name,setName}}>
      {children}
    </CardContext.Provider>
)
}



export  {CardContext, CardContextProvider}