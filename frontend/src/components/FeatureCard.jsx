import React from "react";

function FeatureCard({ Icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center gap-2 rounded-md hover:border-1 border-gray-500 p-10">
      <div className="bg-gray-300 p-3 rounded-full">
        <div className="bg-black p-4 rounded-full text-white">
          <Icon size={24} />
        </div>
      </div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
}

export default FeatureCard;
