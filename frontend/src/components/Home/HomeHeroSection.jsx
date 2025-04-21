import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FiChevronRight } from "react-icons/fi";

const categories = [
  { name: "Woman’s Fashion", hasIcon: true },
  { name: "Men’s Fashion", hasIcon: true },
  { name: "Electronics" },
  { name: "Home & Lifestyle" },
  { name: "Medicine" },
  { name: "Sports & Outdoor" },
  { name: "Baby’s & Toys" },
  { name: "Groceries & Pets" },
  { name: "Health & Beauty" },
];

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 p-4">
      {/* Left Sidebar */}
      <div className="bg-white  border-r border-gray-400  p-4 hidden md:block">
        <ul className="space-y-3">
          {categories.map((item, index) => (
            <li
              key={index}
              className="flex justify-between font-[600] mt-3 items-center text-sm hover:text-blue-500 cursor-pointer transition-all"
            >
              {item.name}
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
          interval={3000}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num}>
              <img
                src={`/assets/slide${num}.png`}
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
