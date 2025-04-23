const mongoose = require("mongoose");
const path = require("path");
const cloudinary = require("../config/cloudinary");
const productModel = require("../models/product");
const products = require("./productsData");

const uploadAllProducts = async () => {
    let finalAllProducts = []
  try {
    // Step 1: Product Images upload on Cloudinary
    for (let product of products) {
      const imagePath = path.join(__dirname, "images", product.imageUrl); // Image Path

      const result = await cloudinary.uploader.upload(imagePath, {  // Upload cloudianry
        folder: "Tekvibe(Ecom)_productImages", // Folder name kis folder ma images save hogii
      });
    
// Updated Product Obj add In the New Array
    finalAllProducts.push({
        ...product,
        imageUrl : result.secure_url
    })
   }

   //  Step 2: Then all products means [] save in the DataBase
  let productssAdd = await productModel.insertMany(finalAllProducts)

  console.log("productssAdd ==>", productssAdd);
  


    console.log("✅ All products uploaded successfully");
  } 
  catch (error) {
    console.log("❌ Error Products not Upload", error);
  }
 
};

module.exports = uploadAllProducts
