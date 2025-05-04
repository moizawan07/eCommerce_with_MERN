let userModel = require('../models/user')
let bcrypt = require('bcrypt')

const editProfile = async (req, res) => {
  let {userId} = req.user
  let {name, email, passwordd, address, phone} = req.body

  try {
    let userDocu = await userModel.findById(userId)

    let passMatch = await bcrypt.compare(passwordd, userDocu.password)
     if(!passMatch) return res.status(200).json({message : 'Password not match'})
     let hashPass = await bcrypt.hash(passwordd,10)

     userDocu.name = name   
     userDocu.email = email   
     userDocu.password = hashPass   
     userDocu.phone = phone   
     userDocu.address = address
     
     await userDocu.save()
    
    res.status(200).json({message : 'Sucess', data : userDocu})
  } 
  catch (error) {
    res.status(500).json({message : 'server error'})
  }
  
}

module.exports = editProfile