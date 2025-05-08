import React from 'react'
import RightTopHeader from '../RightTopHeader'
import AdminFooter from '../EcomerceTab/AdminFooter'
function AdminProfileCom() {
  return (
    <div className='bg-[#020617] w-full h-auto pb-10 min-h-[100vh]  text-white'>
    <RightTopHeader />
    <div className='px-7 pt-7 '>
       <h1 className='text-3xl '>Profile</h1>
        <AdminProfilePage />
       <AdminFooter />
    </div>
    </div>
  )
}

export default AdminProfileCom



import  { useState, useEffect } from 'react';
import { FaUserCircle, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCog, FaShieldAlt, FaTasks } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

function AdminProfilePage() {
  const [profileData, setProfileData] = useState({
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRSuWgL814ABwy-GBvPgsdNCHovAEg2-dD9w&s',
    name: 'Moiz Ahmed',
    role: 'Admin',
    phone: '03192745296',
    email: 'moiz123@gmail.com',
    location: 'Karachi, Pakistan', // Assuming location is relevant
    lastLogin: 'May 6, 2025, 6:00 PM', // Example of activity
    permissions: ['User Management', 'Content Moderation', 'System Configuration', 'Reporting'],
    department: 'Administration',
  });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     Your API fetching logic for admin profile
//     async function fetchAdminProfile() { ... }
//     fetchAdminProfile();
//   }, []);

  const sectionTitleStyle = 'text-lg font-semibold text-gray-300 mb-3';
  const cardStyle = 'bg-[#10233f] rounded-lg shadow-md p-6 mb-6';
  const textStyle = 'text-gray-300';
  const secondaryTextStyle = 'text-sm text-gray-400';
  const accentColor = 'text-blue-400';

  return (
    <div className=" text-gray-300 min-h-screen p-6 md:p-10">
      <div className="mx-auto">
        {/* Top Header */}
        <div className="bg-[#10233f] rounded-lg shadow-md p-6 mb-6 flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img src={profileData.profileImage} alt="Admin Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-semibold">{profileData.name}</h2>
            <p className={secondaryTextStyle}>{profileData.role}</p>
          </div>
          <div className="ml-auto flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center">
              <MdEdit className="mr-2" /> Edit Profile
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className={cardStyle}>
          <h2 className={sectionTitleStyle}>Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <FaPhone className="mr-2 text-gray-400" />
              <p className={secondaryTextStyle}>Phone:</p>
              <p className={textStyle}>{profileData.phone}</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-gray-400" />
              <p className={secondaryTextStyle}>Email:</p>
              <p className={textStyle}>{profileData.email}</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-400" />
              <p className={secondaryTextStyle}>Location:</p>
              <p className={textStyle}>{profileData.location}</p>
            </div>
            <div className="flex items-center">
              <FaCog className="mr-2 text-gray-400" />
              <p className={secondaryTextStyle}>Department:</p>
              <p className={textStyle}>{profileData.department}</p>
            </div>
          </div>
        </div>

        {/* Admin Privileges/Permissions */}
        <div className={cardStyle}>
          <h2 className={sectionTitleStyle}>Admin Privileges</h2>
          <ul className="list-disc pl-5">
            {profileData.permissions.map((permission, index) => (
              <li key={index} className={textStyle}>{permission}</li>
            ))}
          </ul>
        </div>

        {/* Recent Activity */}
        <div className={cardStyle}>
          <h2 className={sectionTitleStyle}>Recent Activity</h2>
          <div className="flex items-center">
            <FaShieldAlt className="mr-2 text-gray-400" />
            <p className={secondaryTextStyle}>Last Login:</p>
            <p className={textStyle}>{profileData.lastLogin}</p>
          </div>
          {/* Add more activity details here if needed */}
        </div>

        {/* Quick Actions/Settings */}
        <div className={cardStyle}>
          <h2 className={sectionTitleStyle}>Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 flex items-center">
              <FaCog className="mr-2" /> Account Settings
            </button>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 flex items-center">
              <FaTasks className="mr-2" /> Task Manager
            </button>
            {/* Add more quick actions as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}









