const express = require('express')
const userRoutes = express.Router()

// Signup Midllware & Controller Import
const signupAuth = require('../middleware/signupAuth')
const signup = require('../controllers/signup')
// Login Middleware & Controller Import
const loginAuth = require('../middleware/loginAuth')
const login = require('../controllers/login')
const verifyToken = require('../middleware/verifytoken')
const adminAuth = require('../middleware/adminAuth')
const getAllusers = require('../controllers/getAllUsers')
const addToCardProducts = require('../controllers/addToCardProductsGet')


// 1: Signup Route
userRoutes.post('/signup', signupAuth, signup)


// 2: Login Route
userRoutes.post('/login', loginAuth, login)


// 3: All Users Get
userRoutes.get('/allUsersGet', verifyToken, adminAuth, getAllusers)  

// 4: Add to Card
userRoutes.post('/addToCard', verifyToken, addToCardProducts)

module.exports = userRoutes