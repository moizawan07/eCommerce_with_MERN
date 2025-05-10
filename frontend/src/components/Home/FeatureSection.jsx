import React from "react";
import FeatureCard from "../FeatureCard";
import { FaTruck, FaHeadset, FaShieldAlt } from "react-icons/fa";
import { t } from "i18next";

function FeaturesSection() {
  return (
    <div className="py-25 px-4 flex flex-col md:flex-row justify-center items-center gap-20">
      <FeatureCard
        Icon={FaTruck}
        title={t('support.first.name')}
        subtitle={t('support.first.des')}
      />
      <FeatureCard
        Icon={FaHeadset}
        title={t('support.second.name')}
        subtitle={t('support.second.des')}
      />
      <FeatureCard
        Icon={FaShieldAlt}
        title={t('support.three.name')}
        subtitle={t('support.three.des')}
      />
    </div>
  );
}

export default FeaturesSection;
