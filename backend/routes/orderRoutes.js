const express = require('express')
const orderRoutes = express.Router()
const verifyToken = require('../middleware/verifytoken');
const order = require('../controllers/order');
const userOrdersGet = require('../controllers/userOrdersGet');
const adminAuth = require('../middleware/adminAuth');
const allOrdersGet = require('../controllers/adminAllOrdersGet');


// 1: Order done
orderRoutes.post('/done', verifyToken,  order)

// 2: User Orders Get Bcuz Print In the profile 
orderRoutes.get('/getUsersOrders', verifyToken, userOrdersGet)

// 3: All Orders Collection get And Print In Admin dashbaord
orderRoutes.get('/allOrdersGet', verifyToken, adminAuth, allOrdersGet)





module.exports = orderRoutes;