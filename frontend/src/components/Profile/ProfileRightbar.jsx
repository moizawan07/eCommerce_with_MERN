import React from 'react';

const EditProfileForm = () => {
  return (
    <div className="bg-white p-6 mt-6 rounded-md shadow-md w-full md:w-3/4 lg:w-[780px] mx-auto">
      <h2 className="text-xl font-semibold mb-6 text-red-500">Edit Your Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className=" rounded w-full py-2 px-3 text-gray-700  bg-[#F5F5F5] outline-none focus:border-red-500"
            placeholder="Md"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
             className=" rounded w-full py-2 px-3 text-gray-700  bg-[#F5F5F5] outline-none focus:border-red-500"
            placeholder="Rimon"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
           className=" rounded w-full py-2 px-3 text-gray-700  bg-[#F5F5F5] outline-none focus:border-red-500"
            placeholder="rimel1111@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
             className=" rounded w-full py-2 px-3 text-gray-700  bg-[#F5F5F5] outline-none focus:border-red-500"
            placeholder="Kingston, 5236, United State"
          />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Password Changes</h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="currentPassword" className="block text-gray-700 text-sm font-bold mb-2">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
               className=" rounded w-full py-2 px-3 text-gray-700  bg-[#F5F5F5] outline-none focus:border-red-500"
              placeholder="Current Passwod"
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
                className=" rounded w-full py-2 px-3 text-gray-700  bg-[#F5F5F5] outline-none focus:border-red-500"
              placeholder="New Passwod"
            />
          </div>
          <div>
            <label htmlFor="confirmNewPassword" className="block text-gray-700 text-sm font-bold mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmNewPassword"
               className=" rounded w-full py-2 px-3 text-gray-700  bg-[#F5F5F5] outline-none focus:border-red-500"
              placeholder="Confirm New Passwod"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="bg-transparent hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 border border-gray-200 rounded shadow-sm mr-4 focus:outline-none focus:shadow-outline">
          Cancel
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-sm focus:outline-none focus:shadow-outline">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export { EditProfileForm}