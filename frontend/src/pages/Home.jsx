import Header from "../components/Header"
import Footer from "../components/Footer"
import ExploreProduct from       "../components/Home/ExploreProduct"
import FlashSaleHeader from      "../components/Home/FlashSaleHeader"
import HeroSection from          "../components/Home/HomeHeroSection"
import StaticCardPage from       "../components/Home/StaticCardsPage"
import NewArrival from           "../components/Home/NewArrival"
import FeaturesSection from      "../components/Home/FeatureSection"



function Home() {

    
  return (
    <>
    <Header />
       <HeroSection />
       <FlashSaleHeader showTimer={true} title='Todays' description='Fresh sales'/>
       <StaticCardPage />
       <ExploreProduct />
       <NewArrival />
       <FeaturesSection />
     <Footer />
    </>
  )
}

export default Home