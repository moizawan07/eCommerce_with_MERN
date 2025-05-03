import React, { useEffect, useState } from 'react';

const OrdersTable = () => {
  const [orders, setOrders] = useState([])
 console.log("orders ==>", orders);
   

  useEffect(() => {
    fetch('http://localhost:3000/order/getUsersOrders', {
        method : 'GET',
        headers:{"authorization" : `bearer ${window.localStorage.getItem('token')}`}
    })
    .then(res => {
      if(res.status !== 200) throw new Error("Error");
      return res.json()})
    .then(data => setOrders(data.data))
    .catch(err => console.log(err))
  },[])
  


  return (
    <div className="w-[950px] mt-5  rounded-md shadow-md overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Billing Method
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">

          {orders.map((order) => (
            order.products.map((product) => (
            <tr key={product._id} className="md:table-row  table-cell">
              <td className="px-6 py-4 whitespace-nowrap md:table-cell block">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <img className="h-10 w-10 rounded" src={product.imageUrl} alt={product.title} />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{product.title}</div>
                  </div>
                </div>
                <div className="md:hidden text-sm text-gray-500 mt-1">Product</div>
              </td>
              <td className="px-10  py-4 whitespace-nowrap md:table-cell block">
                <div className="text-sm text-gray-900">{product.quanity}</div>
                <div className="md:hidden text-sm text-gray-500 mt-1">Quantity</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap md:table-cell block">
                <span
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold ${
                    product.status === 'pending' ? 'bg-yellow-100 text-yellow-800'
                    : product.status === 'accept' ? 'bg-green-100 text-green-800'
                    : product.status === 'declined' ? 'bg-red-100 text-red-800'
                    : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {product.status}
                </span>
                <div className="md:hidden text-sm text-gray-500 mt-1">Status</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:table-cell block">
                {order.userPM === 'cod' ? "Cash on Delevery" : "Easypaisa"}
                <div className="md:hidden text-sm text-gray-500 mt-1">Billing Method</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:table-cell block">
                {new Date(order.createdAt).toLocaleDateString("en-GB")}
                <div className="md:hidden text-sm text-gray-500 mt-1">Date</div>
              </td>
            </tr>
          ))))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;