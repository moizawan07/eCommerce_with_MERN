import { useState, useRef } from "react";
import {useNavigate} from 'react-router-dom'
const CreateProductForm = () => {
  const fileInputRef = useRef(null);
  const [formValue , setFormValue] = useState({
    imageUrl : null,
    title: null,
    category: null,
    rating: null,
    reviews: null,
    oldPrice: null,
    newPrice: null,
    inStock: true,
    discount: null,
  })
  let navigate = useNavigate(null)

// Input Type File On Select Product Image
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  

// Stored Input Value In the FormValue State
  const storedValue = (e) => {
    setFormValue({...formValue, [e.target.name] : e.target.value})
  } 
console.log("form values ==>", formValue);


// Create Product onSubmit 
  const handleCreateProduct = async (e) => {
  e.preventDefault()
  let formData = new FormData()
      formData.append('title', formValue.title)
      formData.append('imageUrl', formValue.imageUrl)
      formData.append('category', formValue.category)
      formData.append('rating', formValue.rating)
      formData.append('reviews', formValue.reviews)
      formData.append('discount', formValue.discount)
      formData.append('oldPrice', formValue.oldPrice)
      formData.append('newPrice', formValue.newPrice)
      formData.append('inStock', formValue.inStock)

      
   try {
    let response = await fetch('https://ecommercewithmern-production.up.railway.app/product/create', {
        method : 'POST',
        headers : {
          'authorization' : `bearer ${window.localStorage.getItem('token')}`,
        },
        body: formData
      })  
     let resData = await response.json()
    
    console.log("response ==>", response);
    
     if(response.status !== 201){
      console.log('if  maaa')
        throw new Error(resData.message);
     }
     
     alert(resData.message)

    //  After Product Create Sucessfully remove state value
     navigate('/admin/products')
      
      
   } 
   catch (error) {
   alert(error.message)
   }
  }

  return (
    <div className="bg-[#0E1628] rounded-md shadow-md p-4 md:p-6">
      <h2 className="text-lg font-semibold text-gray-300 mb-4">Add Product</h2>

      {/* Product Photo Upload */}
      <div
        className="bg-gray-800 rounded-md p-6 mb-4 text-center border border-dashed border-gray-600 cursor-pointer"
        onClick={triggerFileInput}
      >
        <div className="mx-auto w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-orange-500 text-4xl">
          {/* Replace with an actual upload icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.14-3.225L5.825 10.35A7.5 7.5 0 0119.25 12l-6.961 8.7a4.5 4.5 0 01-1.14 3.225m-6.961-8.7A7.5 7.5 0 0019.25 12L12.289 3.3a4.5 4.5 0 011.14-3.225M12 16.5V3.75"
            />
          </svg>
        </div>

        <p className="mt-2 text-gray-400">
          Drop your images here, or{" "}
          <button className="text-orange-500">click to browse</button>
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Supports JPG, PNG, GIF up to 10MB
        </p>
      </div>
      <input type="file" ref={fileInputRef} className="hidden" name="imageUrl" 
             onChange={(e) => setFormValue({...formValue, [e.target.name]: e.target.files[0]})}/>


      <form onSubmit={handleCreateProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Product Information */}
        <div className="col-span-full">

          <h3 className="text-md font-semibold text-gray-300 mb-2">
            Product Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-800 rounded-md p-4">
            <div>
              <label
                htmlFor="productName"
                className="block text-gray-400 text-sm mb-1"
              >
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="title" 
                onChange={storedValue}
                className="w-full bg-gray-700 text-white rounded-md border border-gray-600 py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-gray-400 text-sm mb-1"
              >
                Category
              </label>
              <select
                id="category"
                name="category" 
                onChange={storedValue}
                className="w-full bg-gray-700 text-white rounded-md border border-gray-600 py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-50"
              >
                <option value="">Choose category</option>
                <option value="phones">Phones</option>
                <option value="laptops">Laptops</option>
                <option value="camera">Camera</option>
                <option value="headphones">Head Phones</option>
                <option value="gaming">Gaming</option>
                <option value="smart watch">Smart Watch</option>
                {/* Add more categories */}
              </select>
            </div>

            <div>
              <label
                htmlFor="rating"
                className="block text-gray-400 text-sm mb-1"
              >
                Rating
              </label>
              <input
                type="number"
                name="rating" 
                onChange={storedValue}
                id="rating"
                className="w-full bg-gray-700 text-white rounded-md border border-gray-600 py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="reviews"
                className="block text-gray-400 text-sm mb-1"
              >
                Reviews
              </label>
              <input
                type="number"
                name="reviews" 
                onChange={storedValue}
                id="reviews"
                className="w-full bg-gray-700 text-white rounded-md border border-gray-600 py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="e.g., 0.5 kg"
              />
            </div>
            <div>
              <label
                htmlFor="discount"
                className="block text-gray-400 text-sm mb-1"
              >
                Discount
              </label>
              <input
                type="text"
                name="discount" 
                onChange={storedValue}
                id="discount"
                className="w-full bg-gray-700 text-white rounded-md border border-gray-600 py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="e.g., -10%"
              />
            </div>
            <div>
              <label
                htmlFor="color"
                className="block text-gray-400 text-sm mb-1"
              >
                Color
              </label>
              <div className="flex gap-2">
                {["red", "green", "blue", "yellow", "black", "white"].map(
                  (c) => (
                    <button
                      key={c}
                      type="button"
                      className="w-6 h-6 rounded-full"
                      style={{backgroundColor : `${c}`}}
                    />
                  )
                )}
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-gray-400 text-sm mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                className="w-full bg-gray-900 text-white rounded-md border border-gray-600 py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 resize-none h-24"
                disabled ={true}
              />
            </div>
          </div>
        </div>

        {/* Pricing Details */}
        <div className="col-span-full">
          <h3 className="text-md font-semibold text-gray-300 mb-2">
            Pricing Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-800 rounded-md p-4">
            <div>
              <label
                htmlFor="old price"
                className="block text-gray-400 text-sm mb-1"
              >
                Old Price
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  Rs:
                </div>
                <input
                  type="number"
                  name="oldPrice" 
                  onChange={storedValue}
                  id="old price"
                  className="w-full bg-gray-700 text-white rounded-md border border-gray-600 py-2 pl-10 pr-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  placeholder="5000"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="stock"
                className="block text-gray-400 text-sm mb-1"
              >
                In Stock
              </label>
             <select 
             name="inStock" 
             onChange={storedValue}
             value={storedValue.inStock}
             id="stock" 
             className="w-full bg-gray-700 text-white rounded-md border border-gray-600 py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-50">
                <option value="true">True</option>
                <option value="false">False</option>
             </select>
            </div>
            <div>
              <label
                htmlFor="new price"
                className="block text-gray-400 text-sm mb-1"
              >
                New Price
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  Rs:
                </div>
                <input
                  type="number"
                  name="newPrice" 
                  onChange={storedValue}
                  id="new price"
                  className="w-full bg-gray-700 text-white rounded-md border border-gray-600 py-2 pl-10 pr-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  placeholder="3500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="col-span-full">
          <h3 className="text-md font-semibold text-gray-300 mb-2">Tags</h3>
          <div className="bg-gray-800 rounded-md p-4">
            <div className="flex flex-col lg:flex-row justify-between gap-2 items-center flex-wrap mb-2">
              <input
                type="text"
                className="w-full lg:w-[90%]  bg-gray-900  text-white rounded-md border border-gray-600 py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 mr-2"
                placeholder="Add a tag"
                disabled={true}
              />
              <button
                type="button"
                className="bg-orange-500 w-full lg:w-[8%] text-white py-2 px-4 rounded-md text-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="col-span-full flex justify-end gap-2 mt-6">
          <button
            type="button"
            className="bg-gray-700 text-white py-2 px-4 rounded-md text-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Discard
          </button>
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-4 rounded-md text-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
