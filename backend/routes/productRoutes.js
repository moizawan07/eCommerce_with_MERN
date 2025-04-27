const express = require('express')
const productRoutes = express.Router()
// Import uploadAllProducts fun in this we add product in the mongodb
const uploadAllProducts = require('../products/productsUpload')
const getProducts = require('../controllers/getProducts')
const getCategoryProducts = require('../controllers/categoriesProduct')
const verifyToken = require('../middleware/verifytoken')
const adminAuth = require('../middleware/adminAuth')
const upload = require('../middleware/uploadMulter')
const createProduct = require('../controllers/createProduct')

// Upload The Products in Mongodb
productRoutes.get('/uploads', uploadAllProducts)

// get Products & send the frontend 
productRoutes.get('/getProducts', getProducts)

// Sorting Category wise Product
productRoutes.post('/getCategorie/Product', getCategoryProducts)


// Products Upload By Admin
productRoutes.post('/create', verifyToken, adminAuth, upload.single('imageUrl'), createProduct)






module.exports = productRoutes