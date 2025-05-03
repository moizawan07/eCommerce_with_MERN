const userModel = require("../models/user")

const userprofile = async (req, res) => {
  try {
    let user =  await userModel.findById(req.user.userId)

    res.status(200).json({message : 'sucess', data : user})
  } 
  catch (error) {
    res.status(500).json({message : 'server error',})
  }
}

module.exports = userprofile