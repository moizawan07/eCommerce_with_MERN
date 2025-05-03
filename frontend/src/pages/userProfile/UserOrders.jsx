import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ProfileSidebar from "../../components/Profile/ProfileSidebar"
import UserOrdersRight from "../../components/Profile/userOrdersRight"
import SuggestedNav from "../../components/SuggestedNav"


const UserOrders = () => {
  return (
    <>
      <Header />

        <SuggestedNav>
        <div className="flex justify-between mt-10 px-25">
        <p onClick={() => navigate('/')} className="text-gray-500   cursor-pointer">Home / 
            <span className='cursor-pointer text-gray-900 ml-2'>Profile</span>
        </p> 
        <p>Wellcome <span className='text-red-500'>Moiz!</span></p>
        </div>
        </SuggestedNav>

        <div className="flex items-start flex-wrap justify-evenly w-full pl-25 py-20">
          <ProfileSidebar />
          <UserOrdersRight />
         
       </div>

      <Footer />   
    </>
  )
}

export default UserOrders