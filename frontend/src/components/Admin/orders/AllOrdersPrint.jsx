import React, { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  let [orderFullHis, setOrderFullHis] = useState();

  console.log("modalOn", modalOn);

  useEffect(() => {
    fetch("http://localhost:3000/order/allOrdersGet", {
      method: "GET",
      headers: {
        authorization: `bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Unauthorized Role");
        }
        return res.json();
      })
      .then((data) => setOrders(data.data))
      .catch((err) => alert(err.message));
  }, []);

  // Order Status Change
  const orderStausChange = async (docuId, prodId, value) => {
    console.log("docuId ==>", docuId);
    console.log("prodId ==>", prodId);
    console.log("value ==>", value);

    const updatedOrders = [...orders];
    let docuIndex = updatedOrders.findIndex((item) => item._id === docuId);
    let prodIndex = updatedOrders[docuIndex].products.findIndex(
      (product) => product._id === prodId
    );
    updatedOrders[docuIndex].products[prodIndex].status = value;
    setOrders(updatedOrders);

    try {
      let response = await fetch("http://localhost:3000/admin/statusChange", {
        method: "PUT",
        headers: {
          authorization: `bearer ${window.localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({ docuId, prodId, value }),
      });
      let resData = response.json();

      if (response.status !== 200) throw new Error(resData);

      alert("sucessfully Changed");
    } catch (error) {
      alert(error.message);
    }
  };

  //  Order Full History View
  function orderFullView(docuId, prodId) {
    console.log(docuId, prodId);
    setModalOn(true);
    let docuIndex = orders.find((order) => order._id === docuId);
    let prodIndex = docuIndex.products.find(
      (product) => product._id === prodId
    );

    let orderFullhistoryObj = {
      userName: docuIndex.userName,
      userCity: docuIndex.userCity,
      userAdd: docuIndex.userAdd,
      userPM: docuIndex.userPM,
      orderTime: docuIndex.createdAt,
      ...prodIndex,
    };
    console.log("produIndex ==>", orderFullhistoryObj);

    setOrderFullHis(orderFullhistoryObj);

    // console.log("moiz");
  }

  const dummyOrder = {
    _id: "64367b9aef4a0d3b2c1a3b4f",
    products: [
      {
        _id: "642a11b1e1a7e8f9d2c3b4a5",
        title: "Premium Tech Gadget X1",
        slug: "premium-tech-gadget-x1",
        description: "The latest and greatest tech gadget.",
        imageUrl:
          "data:image/jpeg;base64,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", // Larger image
        category: "Electronics",
        price: 199.99,
        quanity: 1,
      },
    ],
    orderItems: [
      {
        product: "642a11b1e1a7e8f9d2c3b4a5",
        quantity: 1,
        price: 199.99,
      },
    ],
    shippingAddress: {
      address: "Tech Park, Suite 100",
      city: "Karachi",
      postalCode: "75600",
      country: "Pakistan",
    },
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    totalPrice: 199.99,
    userId: "642a11b1e1a7e8f9d2c3b4b6",
    userName: "Tech Savvy User",
    userEmail: "techuser@example.com",
    userCity: "Karachi",
    userPM: "Credit Card",
    createdAt: "2025-05-06T18:30:00.000Z",
    updatedAt: "2025-05-06T18:30:00.000Z",
    __v: 0,
  };

  return (
    <div className="bg-[#0E1628] rounded-md shadow-md overflow-x-auto">
      {modalOn && (
        <OrderDetailsModal order={orderFullHis} closeModal={setModalOn} />
      )}
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
            {orders.map((order) =>
              order.products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b border-gray-700 last:border-b-0"
                >
                  <td className="py-2 px-3">..{product._id.slice(20, 27)}</td>
                  <td className="py-2 pr-3">
                    <div key={product._id} className="flex items-center mb-2">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-8 h-8 rounded object-cover mr-2 bg-[#364153]"
                      />
                      <p>{product.title}</p>
                    </div>
                  </td>
                  <td className="py-2 px-7">{product.quanity}</td>
                  <td className="py-2 px-3">{order.userName}</td>
                  <td className="py-2 px-3">
                    <select
                      value={product.status}
                      onChange={(e) =>
                        orderStausChange(order._id, product._id, e.target.value)
                      }
                      className={`py-1 px-2 rounded outline-none
                 ${
                   product.status == "pending"
                     ? "bg-amber-900 text-amber-300"
                     : product.status == "accept"
                     ? "bg-green-900 text-green-300"
                     : "bg-red-900 text-red-200"
                 }`}
                    >
                      <option
                        className="bg-yellow-900 text-yellow-300"
                        value="pending"
                      >
                        Pending
                      </option>
                      <option
                        className="bg-green-900 text-green-300"
                        value="accept"
                      >
                        Accept
                      </option>
                      <option
                        className="bg-red-900 text-red-200"
                        value="decline"
                      >
                        Decline
                      </option>
                    </select>
                  </td>

                  <td className="py-2 px-3">{order.userCity}</td>
                  <td className="py-2 px-3">
                    {order.userPM == "cod" ? "Cash" : order.userPM}
                  </td>
                  <td className="py-2 px-3">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-3 flex items-center space-x-2">
                    <div
                      onClick={() => orderFullView(order._id, product._id)}
                      className="bg-blue-900 rounded-md p-1"
                    >
                      <AiOutlineEye
                        className="text-blue-300 hover:text-blue-400"
                        size={18}
                      />
                    </div>
                    <div className="bg-yellow-900 rounded-md p-1">
                      <AiOutlineEdit
                        className="text-yellow-300 hover:text-yellow-400"
                        size={18}
                      />
                    </div>
                    <div className="bg-red-900 rounded-md p-1">
                      <AiOutlineDelete
                        className="text-red-300 hover:text-red-400"
                        size={18}
                      />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;

import {
  FaTimes,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCreditCard,
  FaUser,
} from "react-icons/fa";

function OrderDetailsModal({ order, closeModal }) {
  console.log("order ==>", order);


  return (
    <div className="fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-75 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-[#1C2536] rounded-xl shadow-2xl max-w-[400px] w-full relative">
        {/* Close Button */}
        <button
          onClick={() => closeModal(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-300 focus:outline-none"
        >
          <FaTimes size={20} />
        </button>

        {/* Full Width Product Image */}
        {order.imageUrl && (
          <div className="rounded-t-xl overflow-hidden">
            <img
              src={order.imageUrl}
              alt={order.title}
              className="w-full  max-h-50"
            />
          </div>
        )}

        <div className="p-6">
          {/* Product Title */}
          <h2 className="text-xl font-semibold text-gray-300 mb-2">
            {order.title}
          </h2>
          <p className="text-sm text-gray-400 mb-3">
            Quantity: {order.quanity}
          </p>

          <div className="border-b border-gray-700 mb-3 pb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-400 text-sm">Price:</span>
              <span className="text-blue-400 font-semibold text-sm">
                ${order.newPrice}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">order id:</span>
              <span className="text-red-400 font-semibold text-sm">
               {order._id.slice(18, 27)}...
              </span>
            </div>
          </div>

          {/* Order Information */}
          <div className="grid grid-cols-1 gap-2 mb-3">

            <div className="flex items-center mb-1">
              <FaUser className="text-gray-400 mr-2 text-sm" />
              <span className="text-gray-400 text-xs">Buyer:</span>
              <span className="text-yellow-300 ml-1 text-xs capitalize">
                {order.userName}
              </span>
            </div>

            <div className="flex items-center mb-1">
              <FaCalendarAlt className="text-gray-400 mr-2 text-sm" />
              <span className="text-gray-400 text-xs">Date:</span>
              <span className="text-gray-300 ml-1 text-xs">
                {new Date(order.orderTime).toLocaleDateString()}
              </span>
            </div>

            <div className="flex items-center mb-1">
              <FaMapMarkerAlt className="text-gray-400 mr-2 text-sm" />
              <span className="text-gray-400 text-xs">City:</span>
              <span className="text-gray-400 ml-1 text-xs">
                {order.userCity}
              </span>
            </div>

            <div className="flex items-center mb-1">
              <FaCreditCard className="text-gray-400 mr-2 text-sm" />
              <span className="text-gray-400 text-xs">Payment:</span>
              <span className="text-gray-400 ml-1 text-xs capitalize">{order.userPM}</span>
            </div>
          </div>

          {/* Order Total */}
          <div className="mt-4 py-2 border-t border-gray-700">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-semibold text-sm">
                Order Total:
              </span>
              <span className="text-yellow-400 font-bold text-sm">
                Rs:
                {order.newPrice * order.quanity.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
