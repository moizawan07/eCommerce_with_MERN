import Header from "../components/Header"
import Footer from "../components/Footer"
import React from 'react'
import SuggestedNav from '../components/SuggestedNav'
import { useNavigate } from 'react-router-dom'
import ContactSection from '../components/contact/ContectSection'

function Contact() {
    let navigate = useNavigate(null)

  return (
    <>
     <Header />
      <SuggestedNav>
        <span onClick={() => navigate('/')} className="text-gray-500 mt-15 inline-block ml-20 cursor-pointer">Home / </span> 
        <span className="text-gray-900 cursor-pointer"> Contact</span>
      </SuggestedNav>

      <ContactSection />
    <Footer />
    </>
  )
}

export default Contact