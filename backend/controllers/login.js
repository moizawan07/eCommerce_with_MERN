const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const login = async (req, res) => {
 let {email, password} = req.body

 try {
    let user = await userModel.findOne({email})
       if(!user) return res.status(400).json({message : 'invalid email'})

    let passCorreect = await bcrypt.compare(password, user.password)
       if(!passCorreect) return res.status(400).json({message : 'invalid password'})

        
  let payload = {
    userId :    user._id,
    userName :  user.name,
    userEmail : user.email,
    userRole :  user.role,
    userPhone : user.phone,
  }

  let token =  jwt.sign(payload, process.env.JWT_SECRET)

  res.status(200).json({message : 'login successfully', token})
  
        
 } 
 catch (error) {
    res.status(500).json({message : "Server Error"})
 }

}


module.exports = login