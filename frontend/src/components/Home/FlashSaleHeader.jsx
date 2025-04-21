import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FlashSaleHeader = ({ title, description, showTimer = false }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!showTimer) return;

    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 72); // 3 din ka timer

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [showTimer]);

  const formatTime = (value) => String(value).padStart(2, '0');

  return (
    <div className="bg-white pt-15 pb-4 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-4">
      {/* Left Red Indicator */}
      <div className="w-4 h-8 bg-red-500 rounded-md lg:mb-12"></div>

      {/* Title & Description */}
      <div className="lg:mr-8">
        <div className="text-red-500 font-bold text-sm">{title}</div>
        <h2 className="text-2xl font-bold mt-2 lg:mt-4">{description}</h2>
      </div>

      {/* Timer */}
      {showTimer && (
        <div className="flex items-center justify-start gap-2 sm:gap-4 lg:ml-10">
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold text-gray-800">Days</span>
            <span className="font-semibold text-xl lg:text-2xl">{formatTime(timeLeft.days)}</span>
          </div>
          <span className="font-bold text-red-500 text-xl pt-1">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold text-gray-800">Hours</span>
            <span className="font-semibold text-xl lg:text-2xl">{formatTime(timeLeft.hours)}</span>
          </div>
          <span className="font-bold text-red-500 text-xl pt-1">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold text-gray-800">Minutes</span>
            <span className="font-semibold text-xl lg:text-2xl">{formatTime(timeLeft.minutes)}</span>
          </div>
          <span className="font-bold text-red-500 text-xl pt-1">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold text-gray-800">Seconds</span>
            <span className="font-semibold text-xl lg:text-2xl">{formatTime(timeLeft.seconds)}</span>
          </div>
        </div>
      )}

      {/* Arrows */}
      <div className="flex items-center justify-center gap-3 lg:ml-auto">
        <button className="bg-gray-100 text-gray-600 rounded-full p-3 hover:bg-gray-200">
          <FaArrowLeft size={18} />
        </button>
        <button className="bg-gray-100 text-gray-600 rounded-full p-3 hover:bg-gray-200">
          <FaArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default FlashSaleHeader;
