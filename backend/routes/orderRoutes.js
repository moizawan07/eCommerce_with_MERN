const express = require('express')
const orderRoutes = express.Router()
const verifyToken = require('../middleware/verifytoken');
const order = require('../controllers/order');
const userOrdersGet = require('../controllers/userOrdersGet');


// 1: Order done
orderRoutes.post('/done', verifyToken,  order)

// 2: User Orders Get Bcuz Print In the profile 
orderRoutes.get('/getUsersOrders', verifyToken, userOrdersGet)




module.exports = orderRoutes;