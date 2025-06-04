import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SuggestedNav from '../../components/SuggestedNav'
import ProfileSidebar from '../../components/Profile/ProfileSidebar'
import  ChatCom  from '../../components/Profile/Chat'

function ChatPage() {
 
  return (
    <>
    <Header />

    <SuggestedNav>
        <div className="flex justify-between mt-10 px-18 md:px-25">
        <p onClick={() => navigate('/')} className="text-gray-500   cursor-pointer">Home / 
            <span className='cursor-pointer text-gray-900 ml-2'>Profile</span>
        </p> 
        <p>Chat <span className='text-red-500 capitalize'>Bot!</span></p>
        </div>
    </SuggestedNav>

    
       <div className="flex items-start  w-full px-5 md:pl-25 py-20">
          <ProfileSidebar />
          <ChatCom />
       </div>

   <Footer />
    </>
  )
}

export default ChatPage