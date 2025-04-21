import React from "react";
import FeatureCard from "../FeatureCard";
import { FaTruck, FaHeadset, FaShieldAlt } from "react-icons/fa";

function FeaturesSection() {
  return (
    <div className="py-25 px-4 flex flex-col md:flex-row justify-center items-center gap-20">
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
  );
}

export default FeaturesSection;
