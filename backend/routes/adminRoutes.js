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


// 1: Signup Route
// adminRoutes.post('/signup', signupAuth,  signup)

// 2: Login Route
adminRoutes.post('/login', loginAuth, login)

// 3: Coming Dashboard Person Check Hes Authorized Or not means (admin)
adminRoutes.get('/coming/dashboard', verifytoken, adminAuth, 
    (req, res) => res.send({status : 200,message : 'Hes Authorized'}))

    
// 4: User Delete
adminRoutes.delete('/userDelete', verifytoken, adminAuth, userDelete)

// 5: product Delete
adminRoutes.delete('/productDelete', verifytoken, adminAuth, productDelete)



module.exports = adminRoutes