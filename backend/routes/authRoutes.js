const express = require('express')
const authRoutes = express.Router()

// Signup Midllware & Controller Import
const signupAuth = require('../middleware/signupAuth')
const signup = require('../controllers/signup')
// Login Middleware & Controller Import
const loginAuth = require('../middleware/loginAuth')
const login = require('../controllers/login')

// Signup Route
authRoutes.post('/signup', signupAuth, signup)


// Login Route
authRoutes.post('/login', loginAuth, login)


module.exports = authRoutes