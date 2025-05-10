import React, { useEffect, useRef } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaGift, FaTruck } from 'react-icons/fa'; // Import more icons

function DeliveryVideo() {
  let videoRef = useRef(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  }, []);

  return (
    <>
   
    <div className='w-full px-2 flex flex-col items-center lg:flex-row-reverse lg:justify-evenly pb-10 mt-5'>
      <div className=' w-full md:w-[900px] h-[520px]'>
        <video
          src="/assets/orderDone.mp4"
          autoPlay
          ref={videoRef}
          loop
          muted
          className=' w-full md:w-[700px] rounded-lg h-[100%]'
        />
      </div>
        <div className='text-white bg-black bg-opacity-60 rounded-md p-3 md:p-6'>
          <h2 className='md:text-3xl font-semibold mb-4 flex items-center gap-2'>
            <FaCheckCircle className='text-green-400' /> Thanks for Shopping!
          </h2>
          <ul className='space-y-2 md:text-lg'>
            <li className='flex items-center gap-2'>
              <FaTruck className='text-blue-400' /> Fast & Reliable Delivery
            </li>
            <li className='flex items-center gap-2'>
              <FaGift className='text-purple-400' /> Enjoy Your New Items
            </li>
            <li className='flex items-center gap-2'>
              <CiShoppingCart className='text-yellow-400' /> Explore More Great Products
            </li>
            <li>...and many more exciting things to come!</li>
          </ul>
        </div>
    </div>
    <div className="flex justify-center mb-15">
      <button
        onClick={() => navigate('/products')}
        className='mt-8 bg-amber-600 text-white rounded-md px-12 py-4 flex gap-3 items-center cursor-pointer text-lg hover:bg-amber-700 transition-colors duration-300'
      >
        <CiShoppingCart size={28} />
        Continue Shopping
      </button>
      
    </div>
    </>
  );
}

export default DeliveryVideo;