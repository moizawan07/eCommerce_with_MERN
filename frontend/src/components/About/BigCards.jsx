import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const BigCards = ({name, role, imgUrl}) => {
  return (
    <div className="w-[350px] h-[520px] bg-white rounded-lg shadow-md overflow-hidden text-center p-4">
      <img
        src={imgUrl} // <-- Replace with actual image URL
        alt={name}
        className="w-full h-auto object-cover"
      />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-sm text-gray-600 mb-4">{role}</p>
      <div className="flex justify-center gap-4 text-xl text-black">
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
      </div>
    </div>
  );
};

export default BigCards;
