const userModel = require("../models/user");

const signupAuth = async (req, res, next) => {
  console.log('Signup MID ma');
  const { name, email, password, phone, address, role } = req.body;

// Check all fields 
   if(!name || !email ||  !password || !phone || !address || !role){
    return res.status(400).json({ message: "All Fields Required" });
   }

  // Name validation
  let nameRegex = /^[A-Za-z]{3,}(?: [A-Za-z]+)*$/;
  if (!nameRegex.test(name)) {
    return res.status(400).json({ message: "Name must be at 3characters long" });
  }

  // Email validation
  let emailRegex = /^[a-zA-Z0-9._%+-]{4,}@(gmail\.com|yahoo\.com|outlook\.com)$/; // Email Regex
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid  email" });
  }


  // Password validation
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ message: "Password must be 6+ chars with letters and numbers" });
  }

  // Phone number validation
  let phoneRegex = /^\d{11}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ message: "Phone must be 11 digits" });
  }

  // Address validation
  if (address.length < 6) {
    return res.status(400).json({ message: "Address is required" });
  }

  // Role validation
  if (role === "select role") {
    return res.status(400).json({ message: "Please select a valid role" });
  }

   // Check if email already exists
   const existingUser = await userModel.findOne({ email });
   if (existingUser) {
     return res.status(409).json({ message: "User already registered" });
   }

  // Sab kuch theek to chalo next controller
  next();
};

module.exports = signupAuth;
