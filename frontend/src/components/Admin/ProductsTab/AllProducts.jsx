import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'; // Trying Ant Design Outlined
import { useNavigate } from 'react-router-dom';
// If AiOutline... doesn't work, try:
// import { FiEye, FiEdit, FiTrash2 } from 'react-icons/fi'; // Feather Icons

const AllProductList = () => {
  const [products,setProducts] = useState([])
  let navigate = useNavigate(null)
 

 useEffect(() => {
   fetch('http://localhost:3000/product/getProducts')
   .then(res => res.json())
   .then(data => setProducts(data.products))
   .catch(err => alert(err.message))
 }, [])


  return (
    <div className="bg-[#0E1628] rounded-md shadow-md overflow-x-auto">

      <div className="p-4 md:p-6">

        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-lg font-semibold text-gray-300">All Product List</h2>

          <div className="flex items-center space-x-2">
            <button onClick={() => navigate('/admin/create/product')} className="bg-[#FF7A00] text-white py-2 px-4 rounded-md text-sm hover:bg-[#d66500]">
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

          {/* Head */}
          <thead className="text-gray-400 text-sm">
            <tr>
              <th className="py-2 px-3 w-10">
                <input type="checkbox" className="form-checkbox rounded border-gray-600 bg-gray-700 accent-amber-500 focus:text-white" />
              </th>
              <th className="py-2 px-3">Product Img & Name</th>
              <th className="py-2 px-3">Price</th>
              <th className="py-2 px-3">Category</th>
              <th className="py-2 px-3">InStock</th>
              <th className="py-2 px-3">Ratings</th>
              <th className="py-2 px-3">Action</th>
            </tr>
          </thead>

          {/* Body  */}
          <tbody className="text-white text-sm">

           {products.length > 0 && 
             products.map((product) => ( 
              <tr key={product._id} className="border-b border-gray-700 last:border-b-0">
              <td className="py-2 px-3">
                <input type="checkbox" className="form-checkbox rounded border-gray-600 bg-gray-700 accent-amber-500 focus:text-white" />
              </td>

              <td className="py-2 px-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-md overflow-hidden mr-2 bg-gray-700 flex items-center justify-center">
                    <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h6 className="font-semibold">{product.title}</h6>
                    <p className="text-xs text-gray-400">discount:{product.discount}</p>
                  </div>
                </div>
              </td>

              <td className="py-2 px-3">Rs: {product.newPrice}</td>

              <td className="py-2 px-4 text-yellow-400">
                {product.category}
              </td>

              <td className={`py-2 px-3 text-${product.inStock ? 'green-500' : 'red-500'}`}>
                {product.inStock ? 'True' : 'False'}
                </td>

              <td className="py-2 px-4">
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
             ))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProductList;