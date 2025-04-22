const userModel = require("../models/user");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  console.log('Signup CON ma');
  
  try {
    const { name, email, password, phone, address, role } = req.body;

    // Password hashing
    const hashPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new userModel({
      name,
      email,
      password: hashPassword,
      phone,
      address,
      role,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user : newUser
    });

  } 
  catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({ message: "Server error during signup" });
  }
};

module.exports = signup;
