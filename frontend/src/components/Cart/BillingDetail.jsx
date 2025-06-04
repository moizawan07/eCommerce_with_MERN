import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CardContext } from "../../context/CardContext";
import { toast } from "react-toastify";
import { FaUser, FaMapMarkerAlt, FaCity, FaPhone, FaEnvelope, FaGlobe, FaClipboard, FaStickyNote } from 'react-icons/fa';

const BillingDetails = ({ modaal, cardProucts, orderState }) => {
  let { product, setProduct } = cardProucts;
  let { orderDone, setOrderDone } = orderState;
  let { cardItems, setCardItems } = useContext(CardContext);

  const [billingForm, setBillingForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    townCity: "",
    stateProvince: "",
    zipCode: "",
    country: "Pakistan",
    phone: "",
    paymentMethod: "easypaisa",
    orderNotes: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!billingForm.firstName.trim()) newErrors.firstName = "First Name is required.";
    if (billingForm.streetAddress.trim().length < 6) {
      newErrors.streetAddress = "Street Address must be at least 6 characters.";
    }
    if (!billingForm.townCity.trim()) newErrors.townCity = "Town/City is required.";
    if (!/^\d{11}$/.test(billingForm.phone.trim())) {
      newErrors.phone = "Phone Number must be 11 digits.";
    }
    if (!billingForm.paymentMethod) {
      newErrors.paymentMethod = "Please select a payment method.";
    }

    if (billingForm.email.trim() && !/\S+@\S+\.\S+/.test(billingForm.email)) {
      newErrors.email = "Email address is invalid.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function placeOrder() {
    if (!validate()) {
      toast.error("Please correct the errors in the form.", { position: "bottom-center" });
      return;
    }

    let allcheckoutProducts = product.map((item) => ({
      ...item,
      status: "pending",
    }));

    try {
      let response = await fetch("http://localhost:3000/order/done", {
        method: "POST",
        headers: {
          authorization: `bearer ${window.localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          allcheckoutProducts,
          billingDetails: {
            firstName: billingForm.firstName,
            lastName: billingForm.lastName,
            email: billingForm.email,
            streetAddress: billingForm.streetAddress,
            townCity: billingForm.townCity,
            stateProvince: billingForm.stateProvince,
            zipCode: billingForm.zipCode,
            country: billingForm.country,
            phone: billingForm.phone,
            orderNotes: billingForm.orderNotes,
          },
          paymentMethod: billingForm.paymentMethod,
        }),
      });
      let resData = await response.json();

      if (response.status === 200) {
        toast.success("Order Placed Successfully!", { position: "top-left" });
        setProduct([]);
        setCardItems([]);
        modaal(false);
        setOrderDone(true);
      } else {
        toast.error(resData.message || "Failed to place order. Please try again.", { position: "top-center" });
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("An unexpected error occurred. Please try again.", { position: "top-center" });
    }
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 p-4 animate-fade-in bg-gray-100 bg-opacity-70 backdrop-blur-lg">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto custom-scrollbar-hide transform scale-95 md:scale-100 transition-transform duration-300 ease-out border border-gray-200">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 focus:outline-none transition-colors duration-200"
          onClick={() => modaal(false)}
        >
          <AiOutlineClose className="h-8 w-8" />
        </button>
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900 text-center tracking-tight">
          Confirm Your Order
        </h2>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="border border-gray-200 rounded-xl p-6 bg-gray-50 shadow-md">
            <h3 className="text-xl font-bold mb-5 text-gray-800 flex items-center gap-2 pb-3 border-b border-gray-200">
              <FaUser className="text-red-500 text-xl" /> Personal & Billing Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-4 mt-5">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 text-sm font-semibold mb-1.5">
                  <FaUser className="inline-block mr-1.5 text-red-500 text-base" />First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={billingForm.firstName}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 shadow-sm placeholder-gray-400 ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your First Name"
                  required
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 text-sm font-semibold mb-1.5">
                  <FaUser className="inline-block mr-1.5 text-red-500 text-base" />Last Name (Optional)
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={billingForm.lastName}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 shadow-sm placeholder-gray-400 ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your Last Name"
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-1.5">
                  <FaEnvelope className="inline-block mr-1.5 text-red-500 text-base" />Email Address (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={billingForm.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 shadow-sm placeholder-gray-400 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 mt-5">
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-1.5">
                  <FaPhone className="inline-block mr-1.5 text-red-500 text-base" />Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={billingForm.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 shadow-sm placeholder-gray-400 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="e.g., 03001234567"
                  required
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="streetAddress" className="block text-gray-700 text-sm font-semibold mb-1.5">
                  <FaMapMarkerAlt className="inline-block mr-1.5 text-red-500 text-base" />Street Address*
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  value={billingForm.streetAddress}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 shadow-sm placeholder-gray-400 ${
                    errors.streetAddress ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="House #, Street Name, Area"
                  required
                />
                {errors.streetAddress && <p className="text-red-500 text-xs mt-1">{errors.streetAddress}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-4 mt-5">
              <div>
                <label htmlFor="townCity" className="block text-gray-700 text-sm font-semibold mb-1.5">
                  <FaCity className="inline-block mr-1.5 text-red-500 text-base" />Town/City*
                </label>
                <input
                  type="text"
                  id="townCity"
                  name="townCity"
                  value={billingForm.townCity}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 shadow-sm placeholder-gray-400 ${
                    errors.townCity ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="e.g., Karachi"
                  required
                />
                {errors.townCity && <p className="text-red-500 text-xs mt-1">{errors.townCity}</p>}
              </div>
              <div>
                <label htmlFor="stateProvince" className="block text-gray-700 text-sm font-semibold mb-1.5">
                  <FaGlobe className="inline-block mr-1.5 text-red-500 text-base" />State/Province (Optional)
                </label>
                <input
                  type="text"
                  id="stateProvince"
                  name="stateProvince"
                  value={billingForm.stateProvince}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 shadow-sm placeholder-gray-400 ${
                    errors.stateProvince ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="e.g., Sindh"
                />
                {errors.stateProvince && <p className="text-red-500 text-xs mt-1">{errors.stateProvince}</p>}
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-gray-700 text-sm font-semibold mb-1.5">
                  <FaClipboard className="inline-block mr-1.5 text-red-500 text-base" />Zip/Postal Code (Optional)
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={billingForm.zipCode}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 shadow-sm placeholder-gray-400 ${
                    errors.zipCode ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="e.g., 75500"
                />
                {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="country" className="block text-gray-700 text-sm font-semibold mb-1.5">
                <FaGlobe className="inline-block mr-1.5 text-red-500 text-base" />Country (Optional)
              </label>
              <select
                id="country"
                name="country"
                value={billingForm.country}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 shadow-sm placeholder-gray-400 ${
                  errors.country ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                {/* Add more countries as needed */}
              </select>
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 bg-gray-50 shadow-md mt-6">
            <label htmlFor="orderNotes" className="block text-gray-700 text-sm font-semibold mb-1.5">
              <FaStickyNote className="inline-block mr-1.5 text-red-500 text-base" />Order Notes (Optional)
            </label>
            <textarea
              id="orderNotes"
              name="orderNotes"
              rows="4"
              value={billingForm.orderNotes}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 shadow-sm placeholder-gray-400"
              placeholder="Notes about your order, e.g., special delivery instructions, preferred delivery time."
            ></textarea>
          </div>

          <div className="mt-6 border border-gray-200 rounded-xl p-6 bg-gray-50 shadow-md">
            <h3 className="text-xl font-bold mb-5 text-gray-800 flex items-center gap-2 pb-3 border-b border-gray-200">
              <FaClipboard className="text-red-500 text-xl" /> Payment Method*
            </h3>
            <div className="space-y-3 mt-5">
              <div className="flex items-center p-3 border border-gray-300 rounded-lg bg-white cursor-pointer hover:bg-gray-100 transition-colors duration-200 shadow-sm">
                <input
                  type="radio"
                  id="easypaisa"
                  name="paymentMethod"
                  value="easypaisa"
                  checked={billingForm.paymentMethod === "easypaisa"}
                  onChange={handleChange}
                  className="mr-2.5 focus:ring-red-500 h-4.5 w-4.5 text-red-600 border-gray-300 rounded-full cursor-pointer"
                />
                <label htmlFor="easypaisa" className="text-gray-700 text-base font-medium flex-1 cursor-pointer">
                  Easypaisa
                </label>
                <img src="https://placehold.co/60x30/00A300/FFFFFF?text=EasyP" alt="Easypaisa" className="h-6" />
              </div>
              <div className="flex items-center p-3 border border-gray-300 rounded-lg bg-white cursor-pointer hover:bg-gray-100 transition-colors duration-200 shadow-sm">
                <input
                  type="radio"
                  id="cashOnDelivery"
                  name="paymentMethod"
                  value="cod"
                  checked={billingForm.paymentMethod === "cod"}
                  onChange={handleChange}
                  className="mr-2.5 focus:ring-red-500 h-4.5 w-4.5 text-red-600 border-gray-300 rounded-full cursor-pointer"
                />
                <label htmlFor="cashOnDelivery" className="text-gray-700 text-base font-medium flex-1 cursor-pointer">
                  Cash on Delivery
                </label>
                <FaClipboard className="text-gray-600 text-xl" />
              </div>
            </div>
            {errors.paymentMethod && <p className="text-red-500 text-xs mt-1.5">{errors.paymentMethod}</p>}
          </div>

          <div className="mt-6 flex items-center">
            <input
              type="checkbox"
              id="saveInfo"
              name="saveInfo"
              className="mr-2 focus:ring-red-500 h-4.5 w-4.5 text-red-600 border-gray-300 rounded-md cursor-pointer"
            />
            <label htmlFor="saveInfo" className="text-gray-700 text-base cursor-pointer">
              Save this information for faster check-out next time
            </label>
          </div>

          <button
            onClick={placeOrder}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3.5 px-6 rounded-xl mt-8 focus:outline-none focus:shadow-outline transition-all duration-300 shadow-lg text-lg uppercase tracking-wider transform hover:scale-105 active:scale-95"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default BillingDetails;
