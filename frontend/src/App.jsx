import { useContext } from 'react'
import './App.css'
import { CardContextProvider } from './context/CardContext'
import AllRoutes from './routes/AllRoutes'


function App() {
  return (
    <>
    <CardContextProvider>      
       <AllRoutes />
    </CardContextProvider>

    </>
    
  )
}

export default App