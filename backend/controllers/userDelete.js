const userModel = require("../models/user");

const userDelete = async (req, res) => {
  let { userId } = req.body;
  console.log("user id", userId);
  if(!userId) return res.status(400).json({message : 'id Not provided'})

  try {
    let user = await userModel.findByIdAndDelete(userId)
    console.log("user ==>", user);
    
    res.status(200).json({ message: "Sucess" });
  } 
  catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = userDelete;
