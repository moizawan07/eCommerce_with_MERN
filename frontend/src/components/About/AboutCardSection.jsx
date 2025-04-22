import React from 'react'
import FeatureCard from '../FeatureCard'
import { FaSchool } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaTruck, FaHeadset, FaShieldAlt } from "react-icons/fa";

import BigCards from './BigCards';

function AboutCardSection() {


  return (
    <>
    {/* Fisrt Cards Smaill */}
    <div className="flex flex-col md:flex-row justify-center gap-15 py-15">
        <FeatureCard
        Icon={FaSchool} 
        title="10.5k" 
        subtitle="Scalers active our site"
        border={true}
        />
        <FeatureCard
         Icon={FaDollarSign}
         title="33k"  
         subtitle="Monthly Product sale"
         border={true}
          />
        <FeatureCard 
         Icon={FaShoppingBag}
         title="45.5k" 
         subtitle="Customer active in our site"
         border={true}
        />
        <FeatureCard 
        Icon={GiTakeMyMoney}
        title="22k"   
        subtitle="Anual groos sale in our site"
        border={true}
        />
    </div>

     {/* Seconds Cards Big */}
     <div className="flex flex-col md:flex-row justify-center  gap-20 items-center py-25">
        <BigCards name="Chris Gayle" role= "Managing director"  imgUrl="/assets/aboutcard3.png"/>
        <BigCards name="Alex Perry" role= "Fashion designer"  imgUrl="/assets/aboutcard2.png"/>
        <BigCards name="AB devillers" role= "Founder & chairman" imgUrl="/assets/aboutcard1.png"/>
     </div>

     {/* Third Cards */}
     <div className="py-10 px-4 flex flex-col md:flex-row justify-center items-center gap-20">
      <FeatureCard
        Icon={FaTruck}
        title="FREE AND FAST DELIVERY"
        subtitle="Free delivery for all orders over $140"
      />
      <FeatureCard
        Icon={FaHeadset}
        title="24/7 CUSTOMER SERVICE"
        subtitle="Friendly 24/7 customer support"
      />
      <FeatureCard
        Icon={FaShieldAlt}
        title="MONEY BACK GUARANTEE"
        subtitle="We return money within 30 days"
      />
    </div>

    </>
  )
}

export default AboutCardSection