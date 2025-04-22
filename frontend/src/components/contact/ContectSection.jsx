import React from 'react';
import { FiPhoneCall, FiMail } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 md:p-10 bg-white">
      
      {/* Left Side - Contact Info */}
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6 space-y-6 border border-gray-100">
        {/* Call */}
        <div className="flex items-start gap-4">
          <div className="bg-red-500 p-3 rounded-full text-white text-xl">
            <FiPhoneCall />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Call To Us</h3>
            <p className="text-gray-600 text-sm">We are available 24/7, 7 days a week.</p>
            <p className="text-gray-800 text-sm">Phone: +8801611112222</p>
          </div>
        </div>
        <hr />
        {/* Mail */}
        <div className="flex items-start gap-4">
          <div className="bg-red-500 p-3 rounded-full text-white text-xl">
            <FiMail />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Write To US</h3>
            <p className="text-gray-600 text-sm">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-gray-800 text-sm">Emails: customer@exclusive.com</p>
            <p className="text-gray-800 text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6 border border-gray-100 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Your Name *"
            className="flex-1  p-3 rounded bg-gray-100 outline-none focus:border border-red-400"
          />
          <input
            type="email"
            placeholder="Your Email *"
            className="flex-1  p-3 rounded bg-gray-100 outline-none focus:border border-red-400"
          />
          <input
            type="tel"
            placeholder="Your Phone *"
            className="flex-1  p-3 rounded bg-gray-100 outline-none focus:border border-red-400"
          />
        </div>
        <textarea
          placeholder="Your Massage"
          rows="6"
          className="w-full  p-3 rounded bg-gray-100 outline-none focus:border border-red-400"
        />
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded w-fit">
          Send Massage
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
