const express = require('express')
const orderRoutes = express.Router()
const verifyToken = require('../middleware/verifytoken');
const order = require('../controllers/order');


// 1: Order done
orderRoutes.post('/done', verifyToken,  order)





module.exports = orderRoutes;