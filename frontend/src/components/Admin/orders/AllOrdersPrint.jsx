import React, { useState, useEffect } from 'react';
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);

  console.log("orders==>", orders);
  
  useEffect(() => {
    fetch('http://localhost:3000/order/allOrdersGet', {
      method: 'GET',
      headers: { 'authorization': `bearer ${window.localStorage.getItem('token')}` }
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error("Unauthorized Role");
        }
        return res.json();
      })
      .then(data => setOrders(data.data))
      .catch(err => alert(err.message));
  }, []);

// Order Status Change
 const orderStausChange = async (docuId, prodId, value) => {
   console.log("docuId ==>", docuId);
   console.log("prodId ==>", prodId);
   console.log("value ==>", value);

   const updatedOrders = [...orders]
    let docuIndex = updatedOrders.findIndex(item => item._id === docuId)
    let prodIndex = updatedOrders[docuIndex].products.findIndex(product => product._id === prodId)
  updatedOrders[docuIndex].products[prodIndex].status = value
  setOrders(updatedOrders)

  try {
    let response = await fetch('http://localhost:3000/admin/statusChange', {
      method : 'PUT',
      headers : {'authorization' : `bearer ${window.localStorage.getItem('token')}`,
      'Content-type' : 'application/json'},
      body: JSON.stringify({docuId, prodId,value})
    })
    let resData = response.json()
 
      if(response.status !== 200) throw new Error(resData);
 
      alert('sucessfully Changed')
 
  } 
  catch (error) {
    alert(error.message)
  }
 }
  

  return (
    <div className="bg-[#0E1628] rounded-md shadow-md overflow-x-auto">
      <div className="p-4 md:p-6">
        <h2 className="text-lg font-semibold text-gray-300 mb-4">Orders</h2>
        <table className="w-full min-w-[900px] text-left">
          <thead className="text-gray-400 text-sm">
            <tr>
              <th className="py-2 px-3">ID</th>
              <th className="py-2 px-3">Product</th>
              <th className="py-2 px-3">Quantity</th>
              <th className="py-2 px-3">Customer </th>
              <th className="py-2 px-3">Status </th>
              <th className="py-2 px-3">City</th>
              <th className="py-2 px-3">Payment</th>
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-white text-sm">
          {orders.map((order) => (
            order.products.map((product) => (
              <tr key={product._id}className="border-b border-gray-700 last:border-b-0">
              <td className="py-2 px-3">..{product._id.slice(20,27)}</td>
              <td className="py-2 pr-3">
                  <div key={product._id} className="flex items-center mb-2">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-8 h-8 rounded object-cover mr-2 bg-[#364153]"
                    />
                    <p>
                     {product.title}
                    </p>
                  </div></td>
              <td className="py-2 px-7">{product.quanity}</td>
              <td className="py-2 px-3">{order.userName}</td>
              <td className="py-2 px-3">
               <select value={product.status}
               onChange={(e) => orderStausChange(order._id, product._id, e.target.value)}
               className={`py-1 px-2 rounded outline-none
                 ${product.status == "pending" ? 'bg-amber-900 text-amber-300': 
                  product.status == "accept" ? 'bg-green-900 text-green-300' : 
                  'bg-red-900 text-red-200'}`}>
                <option className='bg-yellow-900 text-yellow-300' value='pending'>Pending</option>
                <option className='bg-green-900 text-green-300' value='accept'>Accept</option>
                <option className='bg-red-900 text-red-200' value='decline'>Decline</option>
               </select>
              </td>
              
              <td className="py-2 px-3">{order.userCity}</td>
              <td className="py-2 px-3">{order.userPM == 'cod' ? "Cash" : order.userPM}</td>
              <td className="py-2 px-3">{new Date(order.createdAt).toLocaleDateString()}</td>
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
          ))))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;