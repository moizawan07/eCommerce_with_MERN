import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row  justify-between gap-6 px-6 md:px-20 py-6 bg-white">
      {/* Left - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left md:mt-22">
        <h2 className="text-4xl font-bold mb-6">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
        </p>
        <p className="text-gray-700">
          Exclusive has more than 1 Million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer.
        </p>
      </div>

      {/* Right - Image */}
      <div className="w-full  md:w-[40%]">
        <img
          src="/assets/About1.avif" // <-- Replace with actual image URL
          alt="Our Story"
          className="w-full h-120 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
