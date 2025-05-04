const userModel = require("../models/user")

const userprofile = async (req, res) => {
  // console.log("id", req.user.userId);
  
  try {
    let user =  await userModel.findById(req.user.userId)

    // console.log("user ==>", user);
    
    res.status(200).json({message : 'sucess', data : user})
  } 
  catch (error) {
    res.status(500).json({message : 'server error',})
  }
}

module.exports = userprofile