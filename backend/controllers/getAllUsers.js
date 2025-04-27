const userModel = require("../models/user")

const getAllusers = async  (req, res) => {
  try {
    let allUsers = await userModel.find()
    
    res.send({status : 500, message : 'Server Error..', data : allUsers})
  }
   catch (error) {
    res.send({status : 500, message : 'Server Error..'})
  }
}

module.exports = getAllusers