const express = require('express')
const productRoutes = express.Router()
// Import uploadAllProducts fun in this we add product in the mongodb
const uploadAllProducts = require('../products/productsUpload')
const getProducts = require('../controllers/getProducts')

// Upload The Products in Mongodb
productRoutes.get('/uploads', uploadAllProducts)

// get Products & send the frontend 
productRoutes.get('/getProducts', getProducts)








module.exports = productRoutes