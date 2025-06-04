import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// IMPORTANT: Ensure the path to 'CardContext' file is correct relative to this file.
// For example, if 'ProductDetail.jsx' is in 'src/pages',
// and 'CardContext.js' is in 'src/context', then the path '../../context/CardContext' should be correct.
import { CardContext } from "../../context/CardContext";
// IMPORTANT: Ensure 'react-icons' and 'react-toastify' packages are installed in your project.
// You can install them using: npm install react-icons react-toastify
import { AiFillHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import { FaStar, FaShippingFast, FaUndo, FaInfoCircle, FaTags, FaCommentDots, FaBoxOpen } from 'react-icons/fa';

const ProductDetail = () => {
  const [productValue, setProductValue] = useState(null); // Initialize as null for loading state
  const [selectedImage, setSelectedImage] = useState(null); // State for main image selection
  let { wishlist, setWishlist, cardItems, setCardItems } = useContext(CardContext);
  const { productId } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate

  // Dummy data for additional sections (these are UI elements, not typically fetched from the main product API)
  const customerReviews = [
    { id: 1, author: 'Ali Khan', rating: 5, comment: 'Amazing product! High quality and exactly as described. Highly recommend!', date: '2024-05-20' },
    { id: 2, author: 'Sara Ahmed', rating: 4, comment: 'Good value for money. The color was slightly different than expected, but overall satisfied.', date: '2024-05-18' },
    { id: 3, author: 'Usman Tariq', rating: 5, comment: 'Fast delivery and excellent packaging. Will definitely buy again from here.', date: '2024-05-15' },
  ];

  const relatedProducts = [
    { id: 'rp1', title: 'Matching Accessory', imageUrl: 'https://placehold.co/150x150/A78BFA/FFFFFF?text=Acc', price: '$29.99' },
    { id: 'rp2', title: 'Similar Item 1', imageUrl: 'https://placehold.co/150x150/FACC15/6A0DAD?text=Item1', price: '$79.99' },
    { id: 'rp3', title: 'Similar Item 2', imageUrl: 'https://placehold.co/150x150/6366F1/FFFFFF?text=Item2', price: '$59.99' },
  ];


  useEffect(() => {
    // Fetch product details from API
    fetch("http://localhost:3000/product/productDetail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: productId }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProductValue(data.data);
        if (data.data && data.data.imageUrl) {
          setSelectedImage(data.data.imageUrl); // Set initial main image from API response
        }
      })
      .catch((err) => {
        console.error("Error fetching product details:", err.message);
        toast.error("Failed to load product details: " + err.message); // Use toast for errors
        setProductValue(null); // Ensure productValue is null on error
      });
  }, [productId]); // Depend on productId to refetch if it changes

  // Add To Cart Function
  const addToCart = async () => {
    let token = window.localStorage.getItem("token");
    if (!token) {
      toast.warn("Please log in to add items to cart.", { position: "top-center" });
      return navigate("/login");
    }

    if (!productValue) {
      toast.error("Product data not available.", { position: "bottom-right" });
      return;
    }

    let alreadyAdd = cardItems.findIndex((item) => item === productValue._id);

    if (alreadyAdd >= 0) {
      cardItems.splice(alreadyAdd, 1);
      setCardItems([...cardItems]);
      toast.success("Removed from Cart Successfully!", { position: "bottom-right" });
    } else {
      setCardItems([productValue._id, ...cardItems]);
      toast.success("Added to Cart Successfully!", { position: "bottom-right" });
    }
  };

  // Wishlist Function
  const wishlishDone = () => {
    if (!productValue) {
      toast.error("Product data not available.", { position: "top-right" });
      return;
    }

    let storedWishItems = JSON.parse(window.localStorage.getItem("wishlistItems")) || [];
    let addIt = storedWishItems.findIndex((e) => e === productValue._id);

    if (addIt !== -1) { // Use !== -1 for checking existence
      storedWishItems.splice(addIt, 1);
      toast.success("Removed from Wishlist!", { position: "top-left" });
    } else {
      storedWishItems.push(productValue._id);
      toast.success("Added to Wishlist!", { position: "top-right" });
    }

    setWishlist(storedWishItems);
    window.localStorage.setItem("wishlistItems", JSON.stringify(storedWishItems));
  };

  if (!productValue) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-700">Loading product details or product not found...</p>
      </div>
    );
  }

  // Helper to render star ratings
  const renderStars = (rating) => {
    return (
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'} />
        ))}
      </div>
    );
  };


  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Product Details Section */}
      <div className="container mx-auto px-4 py-6 md:py-8"> {/* Reduced padding */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 bg-white rounded-xl shadow-lg p-5 md:p-8"> {/* Reduced gap, padding, shadow, rounded */}
          {/* Left Side: Images Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 lg:w-2/5"> {/* Reduced gap */}
            <div className="flex md:flex-col gap-18 pt-9 overflow-x-auto md:overflow-y-auto pb-1 md:pb-0 scrollbar-hide"> 
              {(() => {
                const imagesToDisplay = (productValue.imageUrls && productValue.imageUrls.length > 0)
                  ? productValue.imageUrls
                  : [productValue.imageUrl, productValue.imageUrl, productValue.imageUrl, productValue.imageUrl]; // Repeat main image 4 times if no array

                return imagesToDisplay.map((imgUrl, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-16 h-16 shadow-md shadow-red-300 md:w-20 md:h-20 rounded-md overflow-hidden  cursor-pointer transition-all duration-300 '}
                      ${index === 1 ? "md:self-center" : index === 2 ? "md:self-end" : "md:self-start"}`} // Re-added original alignment classes
                    onClick={() => setSelectedImage(imgUrl)}
                  >
                    <img src={imgUrl} alt={`Thumbnail ${index}`} className="object-cover w-full h-full" />
                  </div>
                ));
              })()}
            </div>
            {/* Main Image */}
            <div className="flex-1 flex justify-center items-center bg-gray-100 rounded-lg p-3 shadow-inner"> {/* Reduced padding, rounded */}
              <img
                src={selectedImage || productValue.imageUrl} // Use selectedImage or fallback to productValue.imageUrl
                alt={productValue.title}
                className="object-contain w-full h-full max-h-[400px] lg:max-h-[500px] rounded-md" // Reduced max-height
              />
            </div>
          </div>

          {/* Right Side: Product Info */}
          <div className="flex-1 space-y-4 lg:w-3/5"> {/* Reduced space-y */}
            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight"> {/* Reduced font size */}
              {productValue.title}
            </h1>

            {/* Ratings & Stock */}
            <div className="flex items-center space-x-3"> {/* Reduced space-x */}
              {renderStars(productValue.rating || 4)} {/* Assuming a rating field or default to 4 */}
              <span className="text-gray-600 text-sm">({productValue.reviews || '0'} Reviews)</span> {/* Reduced font size */}
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${ /* Reduced padding, font size */
                  productValue.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {productValue.inStock ? "In Stock" : "Out Of Stock"}
              </span>
            </div>

            {/* Price */}
            <p className="text-4xl font-bold text-red-600"> 
              {productValue.newPrice}
              {productValue.oldPrice && (
                <span className="text-gray-400 text-lg line-through ml-2">{productValue.oldPrice}</span>  
              )}
            </p>

            {/* Short Description */}
            <p className="text-gray-700 text-base leading-relaxed"> 
              {productValue.shortDescription || `${productValue.title} Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.`}
            </p>

            {/* Colours */}
            <div className="space-y-2"> {/* Reduced space-y */}
              <h4 className="font-semibold text-base text-gray-800 flex items-center gap-1"><FaTags className="text-red-500 text-lg" /> Colours:</h4> {/* Reduced font size, icon size */}
              <div className="flex gap-2"> {/* Reduced gap */}
                {/* Dummy colors, replace with productValue.colors if available */}
                <span className="h-6 w-6 rounded-full bg-blue-500 border-2 border-transparent hover:border-black cursor-pointer transition-all duration-200 shadow-sm"></span> {/* Reduced size */}
                <span className="h-6 w-6 rounded-full bg-red-400 border-2 border-transparent hover:border-black cursor-pointer transition-all duration-200 shadow-sm"></span>
                <span className="h-6 w-6 rounded-full bg-green-500 border-2 border-transparent hover:border-black cursor-pointer transition-all duration-200 shadow-sm"></span>
                <span className="h-6 w-6 rounded-full bg-yellow-500 border-2 border-transparent hover:border-black cursor-pointer transition-all duration-200 shadow-sm"></span>
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-2"> {/* Reduced space-y */}
              <h4 className="font-semibold text-base text-gray-800 flex items-center gap-1"><FaBoxOpen className="text-red-500 text-lg" /> Size:</h4>  
              <div className="flex gap-2"> {/* Reduced gap */}
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-1.5 border rounded-md font-medium transition-all duration-200 shadow-sm
                      ${size === "M" ? "bg-red-500 text-white shadow-lg" : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 border-t border-gray-200"> {/* Reduced gap, padding */}
              <button
                className={`flex-1/2 px-5 py-2.5 rounded-lg text-white font-semibold text-base transition-all duration-300 shadow-md
                  ${cardItems.includes(productId) ? "bg-red-600" : "bg-black"}`}
                onClick={addToCart}
                disabled={!productValue.inStock}
              >
                {cardItems.includes(productId) ? "Remove From Cart" : "Add To Cart"}
              </button>
              <button className="flex-1 bg-green-800 text-white px-5 py-2.5 rounded-lg font-semibold text-base hover:bg-red-800 transition-all duration-300 shadow-md">
                Buy Now
              </button>
              <button
                className={`bg-white rounded-full p-2 shadow-sm transition-all duration-200 border border-gray-200
                  ${wishlist.includes(productId) ? "text-red-500 border-red-300" : "text-gray-700 hover:text-red-500 hover:border-red-300"}`}
                onClick={wishlishDone}
              >
                <AiFillHeart size={20} /> {/* Reduced icon size */}
              </button>
            </div>

            {/* Delivery Info */}
            <div className="mt-4 space-y-3"> {/* Reduced margin-top, space-y */}
              <div className="border border-gray-200 p-4 rounded-lg bg-gray-50 shadow-sm"> {/* Reduced padding, rounded */}
                <h4 className="font-semibold mb-1.5 text-gray-800 flex items-center gap-1.5"><FaShippingFast className="text-green-500 text-lg" /> Free Delivery</h4> 
                <input
                  type="text"
                  placeholder="Enter your postal code for Delivery Availability"
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                />
              </div>

              <div className="border border-gray-200 p-4 rounded-lg bg-gray-50 shadow-sm"> {/* Reduced padding, rounded */}
                <h4 className="font-semibold mb-1.5 text-gray-800 flex items-center gap-1.5"><FaUndo className="text-blue-500 text-lg" /> Return Delivery</h4> {/* Reduced margin-bottom, icon size */}
                <p className="text-sm text-gray-600"> 
                  <span className="text-red-600 cursor-pointer hover:underline">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Product Description Section */}
      <section className="bg-white rounded-xl shadow-lg p-5 md:p-8 container mx-auto mt-6"> {/* Reduced padding, rounded, shadow, margin-top */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><FaInfoCircle className="text-red-500 text-xl" /> Product Description</h2> {/* Reduced font size, icon size */}
        <div className="prose max-w-none text-gray-700 leading-normal text-sm"> {/* Reduced font size, leading */}
          <p>{productValue.description || `This ${productValue.title} is crafted with precision and care, ensuring top-notch quality and durability. Its unique design offers both aesthetic appeal and practical functionality, making it a perfect addition to your collection. Experience unparalleled comfort and style with this premium product.`}</p>
          <ul className="list-disc list-inside mt-3 space-y-1.5"> {/* Reduced margin-top, space-y */}
            <li>High-quality materials for long-lasting use.</li>
            <li>Ergonomic design for maximum comfort.</li>
            <li>Vibrant colors that resist fading.</li>
            <li>Easy to clean and maintain.</li>
            <li>Perfect for daily use or special occasions.</li>
          </ul>
          <p className="mt-3"> {/* Reduced margin-top */}
            We are committed to providing our customers with the best products and an exceptional shopping experience. If you have any questions, feel free to contact our support team.
          </p>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-white rounded-xl shadow-lg p-5 md:p-8 container mx-auto mt-6"> {/* Reduced padding, rounded, shadow, margin-top */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><FaCommentDots className="text-red-500 text-xl" /> Customer Reviews ({customerReviews.length})</h2> {/* Reduced font size, icon size */}
        <div className="space-y-4"> {/* Reduced space-y */}
          {customerReviews.length > 0 ? (
            customerReviews.map(review => (
              <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0"> {/* Reduced padding-bottom */}
                <div className="flex items-center mb-1.5"> {/* Reduced margin-bottom */}
                  <span className="font-semibold text-gray-800 mr-2 text-sm">{review.author}</span> {/* Reduced font size, margin */}
                  {renderStars(review.rating)}
                  <span className="text-gray-500 text-xs ml-auto">{review.date}</span> {/* Reduced font size */}
                </div>
                <p className="text-gray-700 leading-snug text-sm">{review.comment}</p> {/* Reduced font size, leading */}
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-sm text-center">No reviews yet. Be the first to review this product!</p> 
          )}
        </div>
        <button className="mt-6 bg-red-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 shadow-md"> {/* Reduced margin-top, padding, rounded */}
          Write a Review
        </button>
      </section>

      {/* Related Products Section */}
      <section className="bg-white rounded-xl shadow-lg p-5 md:p-8 container mx-auto mt-6 mb-8"> {/* Reduced padding, rounded, shadow, margin-top, margin-bottom */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><FaTags className="text-red-500 text-xl" /> Related Products</h2> {/* Reduced font size, icon size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Reduced gap */}
          {relatedProducts.map(product => (
            <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"> {/* Reduced rounded */}
              <img src={product.imageUrl} alt={product.title} className="w-full h-32 object-cover" /> {/* Reduced image height */}
              <div className="p-3"> {/* Reduced padding */}
                <h3 className="font-semibold text-base text-gray-800 truncate">{product.title}</h3> {/* Reduced font size */}
                <p className="text-red-600 font-bold text-lg mt-0.5">{product.price}</p> {/* Reduced font size, margin */}
                <button className="mt-2 w-full bg-red-500 text-white py-1.5 rounded-md text-sm font-medium hover:bg-red-600 transition-colors"> {/* Reduced margin-top, padding, rounded */}
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
