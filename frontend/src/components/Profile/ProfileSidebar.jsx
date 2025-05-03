import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ProfileSidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  let navigate = useNavigate(null)

  const sidebarItems = [
    { path: '/userProfile', label: 'My Profile' },
    { path: '/address-book', label: 'Address Book' },
    { path: '/payment-options', label: 'My Payment Options'},
    { path: '/userOrders', label: 'My Orders' },
    { path: '/my-returns', label: 'My Returns' },
    { path: '/my-cancellations', label: 'My Cancellations' },
    { path: '/wishlist', label: 'My WishList' },
  ];

  return (
    <aside className="bg-white border-r p-4 w-full md:w-64">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Manage My Account</h2>
      <nav className="mb-6">
        <ul className='ml-6'>
          {sidebarItems.slice(0, 3).map((item) => (
            <li key={item.path} className="mb-2">
              <Link
                to={item.path}
                className={`text-gray-500 hover:text-red-500 ${
                  pathname === item.path ? 'text-red-500 font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <h2 className="text-lg font-semibold mb-4 text-gray-800">My Orders</h2>
      <nav className="mb-6">
        <ul className='ml-6'>
          {sidebarItems.slice(3, 6).map((item) => (
            <li key={item.path} className="mb-2">
              <Link
                to={item.path}
                className={`text-gray-500 hover:text-red-500 ${
                  pathname === item.path ? 'text-red-500 font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <h2 className="text-lg font-semibold mb-4 text-gray-800">My WishList</h2>
      <nav>
        <ul className='ml-6'>
          {sidebarItems.slice(6, 7).map((item) => (
            <li key={item.path} className="mb-2">
              <Link
                to={item.path}
                className={`text-gray-500 hover:text-red-500 ${
                  pathname === item.path ? 'text-red-500 font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button 
      onClick={() => {window.localStorage.removeItem('token'); navigate('/')} }
      className='mt-12 bg-red-500 py-1.5 px-7 rounded-md text-white'>Logout</button>
    </aside>
  );
};

export default ProfileSidebar;