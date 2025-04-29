const userModel = require("../models/user")

const getAllusers = async  (req, res) => {
  try {
    let allUsers = await userModel.find()
    
    res.status(200).json({message : 'Sucess', data : allUsers})
  }
   catch (error) {
    res.status(500).json({message : 'Server Error'})
  }
}

module.exports = getAllusers