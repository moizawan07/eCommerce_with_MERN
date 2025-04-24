const express = require('express')
const productRoutes = express.Router()
// Import uploadAllProducts fun in this we add product in the mongodb
const uploadAllProducts = require('../products/productsUpload')
const getProducts = require('../controllers/getProducts')
const getCategoryProducts = require('../controllers/categoriesProduct')

// Upload The Products in Mongodb
productRoutes.get('/uploads', uploadAllProducts)

// get Products & send the frontend 
productRoutes.get('/getProducts', getProducts)

// Sorting Category wise Product
productRoutes.post('/getCategorie/Product', getCategoryProducts)








module.exports = productRoutes