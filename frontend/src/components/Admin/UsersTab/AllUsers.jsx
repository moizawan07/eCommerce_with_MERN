import React from 'react';
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const AllUserTable = () => {
  const usersData = [
    { id: 1, name: 'Moiz Khan', email: 'moiz.khan@example.com', number: '0312-xxxxxxx', role: 'Admin' },
    { id: 2, name: 'Fatima Ali', email: 'fatima.ali@example.com', number: '0300-xxxxxxx', role: 'Editor' },
    { id: 3, name: 'Ahmed Raza', email: 'ahmed.raza@example.com', number: '0333-xxxxxxx', role: 'Subscriber' },
    { id: 4, name: 'Sara Khan', email: 'sara.khan@example.com', number: '0345-xxxxxxx', role: 'Editor' },
    { id: 5, name: 'Usman Malik', email: 'usman.malik@example.com', number: '0321-xxxxxxx', role: 'Admin' },
    { id: 6, name: 'Ayesha Siddiqui', email: 'ayesha.s@example.com', number: '0315-xxxxxxx', role: 'Subscriber' },
    // Add more user data as needed
    { id: 7, name: 'Ali Hassan', email: 'ali.hassan@example.com', number: '0301-xxxxxxx', role: 'Editor' },
    { id: 8, name: 'Hina Khan', email: 'hina.k@example.com', number: '0308-xxxxxxx', role: 'Admin' },
  ];

  return (
    <div className="bg-[#0E1628] rounded-md shadow-md overflow-x-auto">
      <div className="p-4 md:p-6">
        <h2 className="text-lg font-semibold text-gray-300 mb-4">Users</h2>
        <table className="w-full min-w-[600px] text-left">
          <thead className="text-gray-400 text-sm">
            <tr>
              <th className="py-2 px-3">ID</th>
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3">Email</th>
              <th className="py-2 px-3">Number</th>
              <th className="py-2 px-3">Role</th>
              <th className="py-2 px-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-white text-sm">
            {usersData.map((user) => (
              <tr key={user.id} className="border-b border-gray-700 last:border-b-0">
                <td className="py-2 px-3">{user.id}</td>
                <td className="py-2 px-3">{user.name}</td>
                <td className="py-2 px-3">{user.email}</td>
                <td className="py-2 px-3">{user.number}</td>
                <td className="py-2 px-3">{user.role}</td>
                <td className="py-2 px-3 flex items-center space-x-2">
                  <div className="bg-blue-900 rounded-md p-1">
                    <AiOutlineEye className="text-blue-300 hover:text-blue-400" size={18} />
                  </div>
                  <div className="bg-yellow-900 rounded-md p-1">
                    <AiOutlineEdit className="text-yellow-300 hover:text-yellow-400" size={18} />
                  </div>
                  <div className="bg-red-900 rounded-md p-1">
                    <AiOutlineDelete className="text-red-300 hover:text-red-400" size={18} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUserTable;