import React from "react";
import FlashSaleHeader from "./FlashSaleHeader";

function NewArrival() {
  return (
    <>
      <FlashSaleHeader title="Featured" description="New Arrival" />

      <div className="px-4 sm:px-6 lg:px-20 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT IMAGE (PlayStation) */}
          <div className="w-full lg:w-1/2 h-[280px] sm:h-[400px] lg:h-[590px]">
            <img
              src="/assets/playstation.png"
              alt="PlayStation"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-500"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            
            {/* Top Image (Speaker) */}
            <div className="h-[200px] sm:h-[240px] lg:h-[260px]">
              <img
                src="/assets/speaker.png"
                alt="Speaker"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-500"
              />
            </div>

            {/* Bottom 2 Images */}
            <div className="grid grid-cols-2 gap-4 h-[200px] sm:h-[240px] lg:h-[260px]">
              <img
                src="/assets/speakers3.png"
                alt="Speakers"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-500"
              />
              <img
                src="/assets/gucciperfume.png"
                alt="Perfume"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
