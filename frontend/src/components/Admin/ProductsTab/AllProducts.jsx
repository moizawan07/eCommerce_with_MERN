import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'; // Trying Ant Design Outlined
// If AiOutline... doesn't work, try:
// import { FiEye, FiEdit, FiTrash2 } from 'react-icons/fi'; // Feather Icons

const AllProductList = () => {
  const productListData = [
    {
      id: 1,
      name: 'Black T-shirt',
      size: ['S', 'M', 'L', 'XL'],
      price: 80.00,
      stockLeft: 485,
      stockSold: 155,
      category: 'Fashion',
      rating: 4.5,
      reviews: 55,
      image: '/assets/moiz.jpg',
    },
    {
      id: 2,
      name: 'Olive Green Leather Bag',
      size: ['S', 'M'],
      price: 135.00,
      stockLeft: 784,
      stockSold: 674,
      category: 'Hand Bag',
      rating: 4.1,
      reviews: 143,
      image: '/assets/moiz.jpg',
    },
    {
      id: 3,
      name: 'Women Golden Dress',
      size: ['S', 'M'],
      price: 219.00,
      stockLeft: 769,
      stockSold: 180,
      category: 'Fashion',
      rating: 4.4,
      reviews: 174,
      image: '/assets/moiz.jpg',
    },
    {
      id: 4,
      name: 'Gray Cap For Men',
      size: ['S', 'M', 'L'],
      price: 76.00,
      stockLeft: 571,
      stockSold: 87,
      category: 'Cap',
      rating: 4.2,
      reviews: 23,
      image: '/assets/moiz.jpg',
    },
    {
      id: 5,
      name: 'Dark Green Cargo Pant',
      size: ['S', 'M', 'L', 'XL'],
      price: 110.00,
      stockLeft: 241,
      stockSold: 342,
      category: 'Fashion',
      rating: 4.4,
      reviews: 109,
      image: '/assets/moiz.jpg',
    },
    {
      id: 6,
      name: 'Another Product That Might Overflow',
      size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      price: 55.00,
      stockLeft: 100,
      stockSold: 25,
      category: 'Electronics',
      rating: 4.8,
      reviews: 88,
      image: '/assets/moiz.jpg',
    },
  ];

  return (
    <div className="bg-[#0E1628] rounded-md shadow-md overflow-x-auto">
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-lg font-semibold text-gray-300">All Product List</h2>
          <div className="flex items-center space-x-2">
            <button className="bg-[#FF7A00] text-white py-2 px-4 rounded-md text-sm hover:bg-[#d66500]">
              Add Product
            </button>
            <div className="relative">
              <button className="bg-gray-700 text-white py-2 px-3 rounded-md text-sm">
                This Month
              </button>
            </div>
          </div>
        </div>
        <table className="w-full min-w-[800px] text-left">
          <thead className="text-gray-400 text-sm">
            <tr>
              <th className="py-2 px-3 w-10">
                <input type="checkbox" className="form-checkbox rounded border-gray-600 bg-gray-700 accent-amber-500 focus:text-white" />
              </th>
              <th className="py-2 px-3">Product Name & Size</th>
              <th className="py-2 px-3">Price</th>
              <th className="py-2 px-3">Stock</th>
              <th className="py-2 px-3">Category</th>
              <th className="py-2 px-3">Rating</th>
              <th className="py-2 px-3">Action</th>
            </tr>
          </thead>
          <tbody className="text-white text-sm">
            {productListData.map((product) => (
              <tr key={product.id} className="border-b border-gray-700 last:border-b-0">
                <td className="py-2 px-3">
                  <input type="checkbox" className="form-checkbox rounded border-gray-600 bg-gray-700 accent-amber-500 focus:text-white" />
                </td>
                <td className="py-2 px-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-md overflow-hidden mr-2 bg-gray-700 flex items-center justify-center">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h6 className="font-semibold">{product.name}</h6>
                      <p className="text-xs text-gray-400">Size: {product.size.join(', ')}</p>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3">${product.price.toFixed(2)}</td>
                <td className="py-2 px-3">
                  <p className="text-green-400">{product.stockLeft} Item Left</p>
                  <p className="text-red-400">{product.stockSold} Sold</p>
                </td>
                <td className="py-2 px-3">{product.category}</td>
                <td className="py-2 px-3">
                  <div className="flex items-center">
                    <AiFillStar className="text-yellow-500 mr-1" />
                    {product.rating} <span className="text-gray-400">({product.reviews} Review)</span>
                  </div>
                </td>
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

export default AllProductList;