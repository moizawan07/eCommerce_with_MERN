const userModel = require("../models/user");

const userDelete = async (req, res) => {
  let { userId } = req.body;
  console.log("user id", userId);

  try {
    // let user = userModel.find
    res.status(200).json({ message: "Sucess" });
  } 
  catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = userDelete;
