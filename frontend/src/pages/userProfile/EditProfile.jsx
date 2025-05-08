import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SuggestedNav from '../../components/SuggestedNav'
import ProfileSidebar from '../../components/Profile/ProfileSidebar'
import { EditProfileForm } from '../../components/Profile/ProfileRightbar'

function EditProfile() {
  let [userName , setUserName] = useState("moiz")
  function nameChanged (n) {
    setUserName(n)
  }
  return (
    <>
    <Header />

    <SuggestedNav>
        <div className="flex justify-between mt-10 px-25">
        <p onClick={() => navigate('/')} className="text-gray-500   cursor-pointer">Home / 
            <span className='cursor-pointer text-gray-900 ml-2'>Profile</span>
        </p> 
        <p>Wellcome <span className='text-red-500'>{userName}!</span></p>
        </div>
    </SuggestedNav>

    
       <div className="flex items-start justify-between w-full pl-25 py-20">
          <ProfileSidebar />
          <EditProfileForm nameChangedFun = {nameChanged}/>
       </div>

   <Footer />
    </>
  )
}

export default EditProfile