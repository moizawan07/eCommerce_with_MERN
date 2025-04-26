import React from "react";
import { AiFillStar, AiFillEdit, AiFillDelete } from "react-icons/ai";

const TopOrders = () => {
  const topOrdersData = [
    {
      id: 1,
      product: "Wireless Headphones",
      description: "High-quality noise-canceling wireless headphones.",
      price: 99.99,
      status: "In Stock",
      rating: 4.5,
    },
    {
      id: 2,
      product: "Smartphone",
      description: "Latest 5G smartphone with excellent camera features.",
      price: 799.99,
      status: "In Stock",
      rating: 4.7,
    },
    {
      id: 3,
      product: "Gaming Laptop",
      description: "Powerful gaming laptop with high-end graphics.",
      price: 1299.99,
      status: "In Stock",
      rating: 4.8,
    },
    {
      id: 4,
      product: "Smartwatch",
      description: "Stylish smartwatch with fitness tracking features.",
      price: 199.99,
      status: "Out of Stock",
      rating: 4.4,
    },
    {
      id: 5,
      product: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with deep bass sound.",
      price: 59.99,
      status: "In Stock",
      rating: 4.3,
    },
    {
      id: 6,
      product: "Another Product",
      description: "Just another product to demonstrate scrolling.",
      price: 149.99,
      status: "In Stock",
      rating: 4.6,
    },
    {
      id: 7,
      product: "Yet Another Item",
      description: "Keeping the list long for scrolling.",
      price: 29.99,
      status: "Out of Stock",
      rating: 4.1,
    },
    {
      id: 6,
      product: "Another Product",
      description: "Just another product to demonstrate scrolling.",
      price: 149.99,
      status: "In Stock",
      rating: 4.6,
    },
    {
      id: 7,
      product: "Yet Another Item",
      description: "Keeping the list long for scrolling.",
      price: 29.99,
      status: "Out of Stock",
      rating: 4.1,
    },
  ];

  return (
    <div className="bg-[#0E1628] border border-[#334155] p-4 shadow-md overflow-y-auto h-[480px]  w-full  mt-10 rounded-2xl"
    style={{
        scrollbarColor: '#5C6777 #0E1628', // thumb and track color (Firefox)
        '&::-webkit-scrollbar': {
          width: '5px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#0E1628',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#5C6777',
          borderRadius: '4px',
        },
      }}
    >
      <h2 className="text-lg font-semibold text-gray-300 p-4 border-b border-gray-700">
        Top Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-gray-400 text-sm">
            <tr className="bg-gray-700">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Product</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Rating</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-white text-sm">
            {topOrdersData.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-700 last:border-b-0"
              >
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-md overflow-hidden mr-2 bg-gray-600 flex items-center justify-center">
                      {/* Placeholder for image */}
                      <svg
                        className="w-6 h-6 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h6 className="font-semibold">{order.product}</h6>
                      <p className="text-xs text-gray-400">
                        {order.description}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">${order.price.toFixed(2)}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${
                      order.status === "In Stock"
                        ? "bg-green-600 text-green-100"
                        : "bg-red-600 text-red-100"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <AiFillStar className="text-yellow-500 mr-1" />
                    {order.rating.toFixed(1)}
                  </div>
                </td>
                <td className="py-3 px-4 flex items-center gap-2">
                  <AiFillEdit
                    className="text-blue-500 cursor-pointer"
                    size={20}
                  />
                  <AiFillDelete
                    className="text-red-500 cursor-pointer"
                    size={20}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopOrders;
