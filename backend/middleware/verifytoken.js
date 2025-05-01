require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let bearerHeader = req.headers.authorization;
  // console.log("bearre header ==>", bearerHeader);
    if(!bearerHeader) return res.status(401).json({message : 'Header is required'})

  let token = bearerHeader.split(" ")[1];

  // console.log("token ==>", token);

  if (token === "null" || !token) {
    return res.status(401).json({ message: "NO Token provided" });
  }

  let decodeToken = jwt.verify(token, process.env.JWT_SECRET);
//   console.log("user ==>", decodeToken);

  req.user = decodeToken;
  next();
};

module.exports = verifyToken;
