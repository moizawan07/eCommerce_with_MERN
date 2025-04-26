const express = require('express')
const employeRoutes = express.Router()

// Signup Midllware & Controller Import
const signupAuth = require('../middleware/signupAuth')
const signup = require('../controllers/signup')
// Login Middleware & Controller Import
const loginAuth = require('../middleware/loginAuth')
const login = require('../controllers/login')


// 1: Signup Route
employeRoutes.post('/signup', signupAuth,  signup)


// 2: Login Route
employeRoutes.post('/login', loginAuth, login)






module.exports = employeRoutes