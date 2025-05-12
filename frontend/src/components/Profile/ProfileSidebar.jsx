import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiMenu, FiX } from 'react-icons/fi';

const ProfileSidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const sidebarItems = [
    { path: '/userProfile', label: 'My Profile' },
    { path: '/address-book', label: 'Address Book' },
    { path: '/userOrders', label: 'My Orders' },
    { path: '/my-returns', label: 'My Returns' },
    { path: '/my-cancellations', label: 'My Cancellations' },
    { path: '/userChat', label: 'Chat' },
    { path: '/wishlist', label: 'My WishList' },
  ];

  const handleLogout = () => {
    window.localStorage.removeItem('token');
    navigate('/');
    toast.success('Logout successfully', { position: 'top-left' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-35 left-4 z-50 bg-red-500 text-white p-2 rounded-full shadow"
      >
        {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-45 left-0 min-h-[50vh] h-auto md:h-auto w-64 bg-white z-40 border-r p-4 transition-transform duration-300 ease-in-out transform md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Manage My Account
            </h2>
            <ul className="ml-2 mb-6">
              {sidebarItems.slice(0, 3).map((item) => (
                <li key={item.path} className="mb-2">
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-gray-500 hover:text-red-500 ${
                      pathname === item.path ? 'text-red-500 font-semibold' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              My Orders
            </h2>
            <ul className="ml-2 mb-6">
              {sidebarItems.slice(3, 6).map((item) => (
                <li key={item.path} className="mb-2">
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-gray-500 hover:text-red-500 ${
                      pathname === item.path ? 'text-red-500 font-semibold' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              My WishList
            </h2>
            <ul className="ml-2 mb-6">
              {sidebarItems.slice(6, 7).map((item) => (
                <li key={item.path} className="mb-2">
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-gray-500 hover:text-red-500 ${
                      pathname === item.path ? 'text-red-500 font-semibold' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="md:w-35 mt-10 md:mt-auto py-1.5 px-4 bg-red-500 rounded-md text-white w-full"
          >
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default ProfileSidebar;
