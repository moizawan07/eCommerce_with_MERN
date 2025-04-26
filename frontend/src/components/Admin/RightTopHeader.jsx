import { FaSearch, FaMoon, FaBell, FaUser, FaEnvelope, FaMoneyBill, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";

const DashboardHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full bg-[#0F172A] p-4 flex justify-between items-center shadow-sm relative z-50">
      
      {/* Left: Sidebar toggle + Search */}
      <div className="flex items-center gap-3 w-full max-w-md">
        <span className="text-white text-xl cursor-pointer">«</span>

        <div className="flex items-center w-full bg-transparent border border-gray-600 rounded-md px-4 py-2 text-white">
          <FaSearch className="mr-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-sm text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right: Icons + Profile */}
      <div className="flex items-center gap-6 text-white ml-auto">
        <FaMoon className="cursor-pointer text-lg" />
        <FaBell className="cursor-pointer text-lg" />
        
        {/* Profile Pic with dropdown */}
        <div className="relative">
          <img
            src="/assets/moiz.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer object-cover"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          
          {dropdownOpen && (
            <div className="absolute right-0 mt-3 w-52 bg-white rounded-lg shadow-xl animate-fade-in-down text-gray-800">
              {/* Arrow */}
              <div className="absolute -top-2 right-6 w-3 h-3 rotate-45 bg-white border border-b-0 border-r-0"></div>
              <ul className="py-2">
                <DropdownItem icon={<FaUser />} text="Profile" />
                <DropdownItem icon={<FaEnvelope />} text="Messages" />
                <DropdownItem icon={<FaMoneyBill />} text="Pricing" />
                <DropdownItem icon={<FaQuestionCircle />} text="Help" />
                <DropdownItem icon={<FaSignOutAlt />} text="Logout" textColor="text-red-600" />
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DropdownItem = ({ icon, text, textColor }) => (
  <li className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 ${textColor}`}>
    <span className="mr-3">{icon}</span>
    <span>{text}</span>
  </li>
);

export default DashboardHeader;
