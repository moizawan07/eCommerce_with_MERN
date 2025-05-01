const express = require('express')
const orderRoutes = express.Router()
const verifyToken = require('../middleware/verifytoken');
const order = require('../controllers/order');



orderRoutes.get('/done', verifyToken,  order)





module.exports = orderRoutes;