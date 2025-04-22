const express = require('express')
const authRoutes = express.Router()

// Signup Midllware & Controller Import
const signupAuth = require('../middleware/signupAuth')
const signup = require('../controllers/signup')

// Login Middleware & Controller Import

authRoutes.post('/signup', signupAuth, signup)


module.exports = authRoutes