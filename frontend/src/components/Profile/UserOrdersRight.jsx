import React, { useEffect, useState } from 'react';
import { FaBoxOpen } from 'react-icons/fa';

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('https://ecommercewithmern-production.up.railway.app/order/getUsersOrders', {
      method: 'GET',
      headers: {
        "authorization": `bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then(res => {
        if (res.status !== 200) throw new Error("Error");
        return res.json();
      })
      .then(data => setOrders(data.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="w-full md:w-[1035px] px-4 mt-6">
      {orders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {orders.map(order =>
            order.products.map(product => (
              <div key={product._id} className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <img src={product.imageUrl} alt={product.title} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                    <p className="text-sm text-gray-500">Qty: {product.quanity}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Status:</span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      product.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      product.status === 'accept' ? 'bg-green-100 text-green-700' :
                      product.status === 'decline' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {product.status}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Billing:</span>
                    <span className="text-sm">{order.userPM === 'cod' ? 'Cash on Delivery' : 'Easypaisa'}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Date:</span>
                    <span className="text-sm">{new Date(order.createdAt).toLocaleDateString("en-GB")}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center text-gray-400 text-sm gap-2">
                  <FaBoxOpen />
                  <span>Order ID: {order._id.slice(-6).toUpperCase()}</span>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <p className='text-center text-gray-500 mt-20'>No Orders Right Now</p>
      )}
    </div>
  );
};

export default OrdersTable;
