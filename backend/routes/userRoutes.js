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
const userprofile = require('../controllers/userProfile')
const editProfile = require('../controllers/editProfile')
const chatMessageSend = require('../controllers/chatMessage')
const forgotPassword = require('../controllers/forgotPassword')
const resetPassword = require('../controllers/resetPassword')



// 1: Signup Route
userRoutes.post('/signup', signupAuth, signup)

// 2: Login Route
userRoutes.post('/login', loginAuth, login)


// 3: All Users Get
userRoutes.get('/allUsersGet', verifyToken, adminAuth, getAllusers)  

// 4: Add to Card
userRoutes.post('/addToCard', verifyToken, addToCardProducts)

// 5: User get Show Data on the profile page
userRoutes.get('/getUser', verifyToken, userprofile)

// 6: Edit Profile 
userRoutes.post('/editProfile', verifyToken, editProfile)

// 7: Chat
userRoutes.post('/chatMsgSend', verifyToken, chatMessageSend)
 
// 8: ForgotPassword 
userRoutes.post('/forgotPassword', forgotPassword)

// 8: Reset password 
userRoutes.post('/resetPassword/:token', resetPassword)


module.exports = userRoutes