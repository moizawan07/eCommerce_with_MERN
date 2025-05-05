const express = require('express')
const adminRoutes = express.Router()

// Signup Midllware & Controller Import
const signupAuth = require('../middleware/signupAuth')
const signup = require('../controllers/signup')
// Login Middleware & Controller Import
const loginAuth = require('../middleware/loginAuth')
const login = require('../controllers/login')
const verifytoken = require('../middleware/verifytoken')
const adminAuth = require('../middleware/adminAuth')
const userDelete = require('../controllers/userDelete')
const productDelete = require('../controllers/ProductDelete')
const analytic = require('../controllers/analytic')
const productInStockChanged = require('../controllers/productInstockChange')


// 1: Signup Route
// adminRoutes.post('/signup', signupAuth,  signup)

// 2: Login Route
adminRoutes.post('/login', loginAuth, login)

// 3: Coming Dashboard Person Check Hes Authorized Or not means (admin)
adminRoutes.get('/coming/dashboard', verifytoken, adminAuth, 
    (req, res) => res.send({status : 200,message : 'Hes Authorized'}))
    

// 4: Analtics Details send
adminRoutes.get('/analytics', verifytoken, adminAuth, analytic) 
    
// 5: User Delete
adminRoutes.delete('/userDelete', verifytoken, adminAuth, userDelete)

// 6: product Delete
adminRoutes.delete('/productDelete', verifytoken, adminAuth, productDelete)

// 6: product InStock Changed
adminRoutes.put('/productInStockChanged', verifytoken, adminAuth, productInStockChanged)




module.exports = adminRoutes