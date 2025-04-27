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


// 1: Signup Route
// adminRoutes.post('/signup', signupAuth,  signup)


// 2: Login Route
adminRoutes.post('/login', loginAuth, login)

// 3: Coming Dashboard Person Check Hes Authorized Or not means (admin)
adminRoutes.get('coming/dashboard', verifytoken, adminAuth, 
    (req, res) => res.send({status : 200,message : 'Hes Authorized'}))





module.exports = adminRoutes