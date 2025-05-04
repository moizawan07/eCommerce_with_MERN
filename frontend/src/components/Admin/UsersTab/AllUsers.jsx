import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const AllUserTable = () => {
  const [users, setUsers] = useState([])

// Get all Users
useEffect(() => {
  fetch('http://localhost:3000/user/allUsersGet', {
    method : 'GET',
    headers : {'authorization' : `bearer ${window.localStorage.getItem('token')}`}
  })
  .then(res => {
    if(res.status != 200){
     throw new Error("UnAuthorized Role");
    }
    return res.json()})
  .then(data => setUsers(data.data))
  .catch(err => alert(err.message))
}, [])


async function userDelete  (userId){
  alert('hello', userId)

  // try {
  //   let response = await fetch('http://localhost:3000/user/allUsersGet', {
  //    method : 'POST',
  //    headers : {'authorization' : `bearer ${window.localStorage.getItem('token')}`},
  //    body: JSON.stringify({userId})
  //  })
  // //  let resData = response.json()

     if(Response.status !== 200) throw new Error(resData);

     alert('sucessfully delete')
  //  console.log("response", response);
      
  // } 
  // catch (error) {
  //   console.error(error);
  // }
}

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
            {users.length > 0 && 
             users.map((user, index) => (
              <tr key={index} className="border-b border-gray-700 last:border-b-0">
                <td className="py-2 px-3">{index + 1}</td>
                <td className="py-2 px-3">{user.name}</td>
                <td className="py-2 px-3 ">{user.email}</td>
                <td className="py-2 px-3">{user.phone.slice(0,4)}-xxxxxxxx</td>
                <td className={`py-2 px-3 text-${user.role === 'admin' ? 'yellow-400' :  
                      user.role === 'employe' ? 'orange-500' : 'green-400'}`}>
                  {user.role}
                  </td>
                <td className="py-2 px-3 flex items-center space-x-2">
                  <div className="bg-blue-900 rounded-md p-1">
                    <AiOutlineEye className="text-blue-300 hover:text-blue-400" size={18} />
                  </div>
                  <div className="bg-yellow-900 rounded-md p-1">
                    <AiOutlineEdit className="text-yellow-300 hover:text-yellow-400" size={18} />
                  </div>
                  <div className="bg-red-900 rounded-md p-1">
                    <AiOutlineDelete onClick={() => userDelete(user._id)} className="text-red-300 hover:text-red-400" size={18} />
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