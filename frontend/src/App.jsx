import { useContext } from 'react'
import './App.css'
import { CardContextProvider } from './context/CardContext'
import AllRoutes from './routes/AllRoutes'
import {ToastContainer} from 'react-toastify'
import {useTranslation} from 'react-i18next'

function App() {
  const {t, i18n} = useTranslation()


  return (
    <>

    <ToastContainer />
    <CardContextProvider>       {/* Add To Card Context */}
       <AllRoutes />
    </CardContextProvider>

    </>
    
  )
}

export default App