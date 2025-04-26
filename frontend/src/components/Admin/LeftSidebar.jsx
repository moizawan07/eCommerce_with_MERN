import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaChartBar,
  FaUser,
  FaBox,
  FaCog,
  FaUsers,
  FaPlus,
  FaClipboardList,
  FaShoppingCart,
  FaUserCircle
} from "react-icons/fa";

import { MdMenuOpen, MdOutlineClose } from "react-icons/md";

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768); // Initially open on larger screens

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-[#0F172A] text-white min-h-screen px-2 duration-300 ease-in-out
          ${isOpen ? "w-54" : "w-20"} relative flex flex-col`}
      >
        {/* Toggle Button */}
        <button
          className={`absolute top-5 ${isOpen ? "right-4" : "left-5"} z-10`}
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <MdOutlineClose className="text-white text-3xl" />
          ) : (
            <MdMenuOpen className="text-white text-3xl" />
          )}
        </button>

        {/* Logo */}
        <h1
          className={`text-2xl font-bold origin-left duration-200 mb-8 mt-10 ${
            !isOpen && "scale-0"
          }`}
        >
          Logoipsum
        </h1>

        {/* Links */}
        <div className={`flex flex-col gap-4 ${!isOpen && "justify-start"} flex-1`}>
          <SidebarLink to="/" icon={<FaChartBar />} label="Dashboard" isOpen={isOpen} active />
          <SidebarLink to="/analytics" icon={<FaClipboardList />} label="Analytics" isOpen={isOpen} />
          <SidebarLink to="/users" icon={<FaUser />} label="Users" isOpen={isOpen} />
          <SidebarLink to="/categories" icon={<FaClipboardList />} label="Categories" isOpen={isOpen} />
          <SidebarLink to="/products" icon={<FaBox />} label="Products" isOpen={isOpen} />
          <SidebarLink to="/orders" icon={<FaClipboardList />} label="Orders" isOpen={isOpen} />
          <SidebarLink to="/purchases" icon={<FaShoppingCart />} label="Purchases" isOpen={isOpen} />
          <SidebarLink to="/new-product" icon={<FaPlus />} label="New Product" isOpen={isOpen} />
          <SidebarLink to="/profile" icon={<FaUserCircle />} label="Profile" isOpen={isOpen} />
          <SidebarLink to="/settings" icon={<FaCog />} label="Settings" isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};

const SidebarLink = ({ to, icon, label, isOpen, active }) => (
  <Link
    to={to}
    className={`flex items-center gap-4 p-2 rounded transition-colors duration-200
      ${active ? "bg-[#2563EB]" : "hover:bg-[#2563EB]"}
      ${!isOpen ? "justify-center" : ""}`}
  >
    <span className="text-lg">{icon}</span>
    <span className={`${!isOpen && "hidden"} duration-200`}>{label}</span>
  </Link>
);

export default LeftSidebar;