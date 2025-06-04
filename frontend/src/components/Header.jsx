import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {useTranslation} from 'react-i18next'
import {
  FiHeart,
  FiShoppingCart,
  FiSearch,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  let { cardItems } = useContext(CardContext);
  const {t, i18n} = useTranslation()

  const navLinks = ["home", "products", "about", "contact", "signup"];

  // Changed Lanuage Function
  const changeLanguage = (e) => {
   i18n.changeLanguage(e.target.value)
  }

  return (
    <header className="shadow shadow-red-500 py-4 px-5 md:px-13  flex items-center justify-between relative z-50 bg-white">
      {/* Logo */}
      <h1 className="text-3xl font-bold stylish">{t('shopName')}</h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6">
        {navLinks.map((item) => (
          <NavLink
            key={item}
            to={`/${item === "home" ? "" : item.toLowerCase()}`}
            className={({ isActive }) =>
              `text-sm underline-offset-4 ${
                isActive ? "text-red-500 border-red-500 font-semibold" : ""
              }`
            }
          >
            {t(`navbar.${item}`)}
          </NavLink>
        ))}
      </nav>

      {/* Desktop Search + Icons */}
      <div className="hidden md:flex items-center gap-6">
        {/* Change Lanuages box */}
      <select
  onChange={changeLanguage}
  value={i18n.language}
  className="border px-2 py-1 rounded-md text-sm focus:outline-none border-gray-500"
>
  <option value="eng">🇺🇸 English</option>
  <option value="urdu">🇵🇰 Urdu</option>
  <option value="china">🇨🇳 Chinese</option>
  <option value="arbi">🇸🇦 Arabic</option>
</select>


        <div className="bg-gray-100 rounded-md px-3 py-1 flex items-center focus-within:ring-2 focus-within:ring-gray-400">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent outline-none text-sm w-43 focus:w-64 transition-all duration-300"
          />
          <FiSearch className="text-gray-500 ml-2" />
        </div>

        <FiHeart className="text-xl cursor-pointer" />
        <NavLink
          to="/cart"
          className={({ isActive }) => `relative ${isActive && "text-red-500"}`}
        >
          <FiShoppingCart className="text-xl cursor-pointer" />
          <p className="absolute top-[-7px] left-3 text-white w-5 h-5 text-center content-center rounded-[50%] bg-red-600 z-50 font-semibold text-[12px]">
            {cardItems.length}
          </p>
        </NavLink>

        <NavLink to="/userProfile"
         className={({isActive}) =>
          `${isActive && "text-red-500"}`
          }
        >
          <FiUser className="text-xl cursor-pointer" />
        </NavLink>
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden" onClick={toggleSidebar}>
        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar - Mobile */}
       <div
     className={`fixed top-0 right-0 h-full w-70 md:hidden bg-white shadow-md transform ${
     isSidebarOpen ? "translate-x-0" : "translate-x-full"
  }  transition-transform duration-300 ease-in-out z-50`}
>
  {/* Header */}
  <div className="p-4 flex justify-between items-center border-b">
    <h2 className="text-xl font-bold text-red-500">{t("menu")}</h2>
    <button onClick={toggleSidebar}>
      <FiX size={24} />
    </button>
  </div>

  {/* Language Selector */}
  <div className="px-4 py-2">
    <select
      onChange={changeLanguage}
      value={i18n.language}
      className="w-full border px-3 py-2 rounded-md text-sm focus:outline-none border-gray-500"
    >
      <option value="eng">ENG</option>
      <option value="urdu">URDU</option>
      <option value="china">CHINA</option>
      <option value="arbi">ARBI</option>
    </select>
  </div>

  {/* Search Bar */}
  <div className="px-4 py-4">
    <div className="bg-gray-100 rounded-md px-3 py-2 flex items-center focus-within:ring-2 focus-within:ring-gray-400">
      <input
        type="text"
        placeholder={t("searchPlaceholder")}
        className="bg-transparent outline-none text-sm w-full"
      />
      <FiSearch className="text-gray-500 ml-2" />
    </div>
  </div>

  {/* Icons */}
    <div className="flex justify-around items-center py-3 border-b">
    <FiHeart className="text-xl cursor-pointer" />

    <NavLink
      to="/cart"
      onClick={toggleSidebar}
      className={({ isActive }) =>
        `relative ${isActive && "text-red-500"}`
      }
    >
      <FiShoppingCart className="text-xl cursor-pointer" />
      <p className="absolute top-[-7px] left-3 text-white w-5 h-5 text-center rounded-full bg-red-600 z-50 font-semibold text-[12px]">
        {cardItems.length}
      </p>
    </NavLink>

    <NavLink
      to="/userProfile"
      onClick={toggleSidebar}
      className={({ isActive }) =>
        `${isActive && "text-red-500"}`
      }
    >
      <FiUser className="text-xl cursor-pointer" />
    </NavLink>
    </div>

  {/* Nav Links */}
     <nav className="flex flex-col space-y-4 p-4">
    {navLinks.map((item) => (
      <NavLink
        key={item}
        to={`/${item === "home" ? "" : item.toLowerCase()}`}
        onClick={toggleSidebar}
        className={({ isActive }) =>
          `text-base text-gray-700 hover:text-black ${
            isActive && "text-red-500 font-semibold"
          }`
        }
      >
        {t(`navbar.${item}`)}
      </NavLink>
    ))}
     </nav>
  </div>
    </header>
  );
};

export default Header;
