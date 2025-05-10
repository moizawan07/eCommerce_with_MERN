import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FiChevronRight } from "react-icons/fi";
import { t } from "i18next";

const categories = [
  { name: "Smartphones", hasIcon: true },
  { name: "Laptops & PCs", hasIcon: true },
  { name: "Smartwatches", hasIcon: true },
  { name: "Bluetooth Speakers" },
  { name: "Headphones & Earbuds" },
  { name: "Mobile Accessories" },
  { name: "Gaming Devices" },
  { name: "Camera & Photography" },
  { name: "Home Electronics" },
];

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 p-4">
      {/* Left Sidebar */}
      <div className="bg-white  border-r border-gray-400  p-4 hidden md:block">
        <ul className="">
          {categories.map((item, index) => (
            <li
              key={index}
              className="flex justify-between font-[600] mb-6 items-center text-sm hover:text-red-600 cursor-pointer transition-all"
            >
              {t(`heroLeft.name${++index}`)}
              {console.log(`heroleft.name${++index}`)}
              {item.hasIcon && <FiChevronRight className="text-sm" />}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Carousel */}
      <div className="w-full">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={2000}
        >
          {[1,2,3,4,5].map((num) => (
            <div key={num}>
              <img
                src={`/assets/crousel${num}.png`}
                alt={`Slide${num}`}
                className="rounded-lg h-64 md:h-105 - w-full"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
