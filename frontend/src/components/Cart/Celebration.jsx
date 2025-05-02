import React, { useEffect, useRef } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

function DeliveryVideo() {
  let videoRef = useRef(null)
  let navigate = useNavigate(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0; // Set to 2x speed (fast)
    }
  }, []);


  return (
    <div className='w-full flex flex-col justify-center items-center pb-15'>
       <video
         src="/assets/orderDone.mp4" // Apne video file ka path dein
         autoPlay
         ref={videoRef} 
         loop 
         muted 
         style={{ width: '1800px', height: '500px' }} // Aap apne hisaab se style kar sakte hain
      />
        <button 
        onClick={() => navigate('/products')}
        className='bg-amber-600 text-white rounded-md px-10 py-3.5 flex gap-2 items-center cursor-pointer'>
          <CiShoppingCart size={24}/>
          Continue Shopping 
        </button>
      </div>
  );
}

export default DeliveryVideo;