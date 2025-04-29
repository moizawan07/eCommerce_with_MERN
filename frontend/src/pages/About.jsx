import Header from "../components/Header"
import Footer from "../components/Footer"
import SuggestedNav from "../components/SuggestedNav"
import HeroSection from "../components/About/AboutHeroSection"
import AboutCardSection from "../components/About/AboutCardSection"
import { useNavigate } from "react-router-dom"


function About() {
 let navigate = useNavigate(null)

 
  return (
    <>
    <Header />
    <SuggestedNav>
        <span onClick={() => navigate('/')} className="text-gray-500 mt-15 inline-block ml-20 cursor-pointer">Home / </span> 
        <span className="text-gray-900 cursor-pointer"> About</span>
      </SuggestedNav>

      <HeroSection />
      <AboutCardSection />
    <Footer />
    </>
  )
}

export default About