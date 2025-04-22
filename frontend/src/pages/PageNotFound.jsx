import { useNavigate } from "react-router-dom"
import SuggestedNav from "../components/SuggestedNav"


function PageNotFound() {
    let navigate = useNavigate(null)
  return (
    <>
       <SuggestedNav>
        <span onClick={() => navigate('/')} className="text-gray-500 mt-15 inline-block ml-20 cursor-pointer">Home / </span> 
        <span className="text-gray-900 cursor-pointer"> 404 Error</span>
       </SuggestedNav>

     <div className="text-center my-35">
        <h1 className="md:text-8xl">404 Not Found</h1>
        <p className="mt-5">Your visited page not found. You may go home page</p>
        <button
        onClick={() => navigate('/')}
         className="mt-17 rounded-md text-white w-[250px] py-4 bg-red-500">Back to home page</button>
     </div>
    </>
  )
}

export default PageNotFound