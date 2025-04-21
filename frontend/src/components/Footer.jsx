import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { MdPrivacyTip, MdOutlineContactSupport } from "react-icons/md";
import { TbQuestionMark } from "react-icons/tb";
import { FiLogIn } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7">
        {/* Exclusive Section */}
        <div className="w-[200px]">
          <h6 className="text-lg font-semibold mb-4 font-family: Inter">
            Exclusive
          </h6>
          <p className="mb-2">Subscribe</p>
          <p className="text-sm text-gray-400 mb-4">
            Get 10% off your first order
          </p>
          <div className="flex rounded-md overflow-hidden border-1 border-white py-1">
            <input
              type="email"
              className=" text-gray-300 py-1 px-3 text-[14px] w-full focus:outline-none placeholder:text-gray-500"
              placeholder="Enter your email"
            />
            <button className=" hover:bg-gray-600 text-white py-2 px-4">
              <IoMdSend size={20}/>
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="w-[200px]">
          <h6 className="text-lg font-semibold mb-4">Support</h6>
          <p className="text-sm text-gray-400 mb-2 flex items-center">
            <ImLocation className="mr-2" /> 111 Bijoy sarani, Dhaka, DH 1515,
            Bangladesh.
          </p>
          <p className="text-sm text-gray-400 mb-2 flex items-center">
            <HiOutlineMail className="mr-2" /> exclusive@gmail.com
          </p>
          <p className="text-sm text-gray-400 flex items-center">
            <BsTelephoneFill className="mr-2" /> +88015-88888-9999
          </p>
        </div>

        {/* Account Section */}
        <div className="w-[200px]">
          <h6 className="text-lg font-semibold mb-4">Account</h6>
          <ul className="text-sm text-gray-400">
            <li className="mb-2 hover:text-white">
              <AiOutlineUser className="inline-block mr-2" /> My Account
            </li>
            <li className="mb-2 hover:text-white">
              <FiLogIn className="inline-block mr-2" /> Login / Register
            </li>
            <li className="mb-2 hover:text-white">
              <AiOutlineShoppingCart className="inline-block mr-2" /> Cart
            </li>
            <li className="mb-2 hover:text-white">
              <AiOutlineHeart className="inline-block mr-2" /> Wishlist
            </li>
            <li className="hover:text-white">
              <BsShop className="inline-block mr-2" /> Shop
            </li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="w-[200px]">
          <h6 className="text-lg font-semibold mb-4">Quick Link</h6>
          <ul className="text-sm text-gray-400">
            <li className="mb-2 hover:text-white">
              <MdPrivacyTip className="inline-block mr-2" /> Privacy Policy
            </li>
            <li className="mb-2 hover:text-white">
              <RiLockPasswordLine className="inline-block mr-2" /> Terms Of Use
            </li>
            <li className="mb-2 hover:text-white">
              <TbQuestionMark className="inline-block mr-2" />
              FAQ
            </li>
            <li className="hover:text-white">
              <MdOutlineContactSupport className="inline-block mr-2" /> Contact
            </li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="w-[280px]">
          <h6 className="text-lg font-semibold mb-4">Download App</h6>
          <p className="text-sm text-gray-400 mb-2">
            Save $3 with App New User Only
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center mb-2">
            {/* Replace with your actual QR code image */}
            <div className="bg-gray-300 p-0 rounded mr-2 mb-2 md:mb-0 mt-2">
              {/* You can use a component to generate or display your QR code here */}
              <img
                src="/assets/QrCode.png"
                alt="scanner"
                className="w-[75px]"
              />
            </div>
            <div>
              <img
                className="mt-1.5 w-[100px]"
                src="/assets/googlestore.png"
                alt="Google App Store"
              />
              <img
                className="mt-1.5 w-[100px]"
                src="/assets/appstore.png"
                alt="App Store"
              />
            </div>
          </div>
          <div className="flex items-center mt-6">
            <a href="#" className="mr-4 hover:text-gray-300">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="mr-4 hover:text-gray-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="mr-4 hover:text-gray-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p className="relative top-6"> &copy; Copyright Moiz 2025. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
