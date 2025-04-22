
const loginAuth = async (req, res, next) => {
  console.log("Login MID ma");
  const {email, password} = req.body;

  // Check all fields
  if (!email || !password) {
    return res.status(400).json({ message: "All Fields Required" });
  }

  // Email validation
  let emailRegex =/^[a-zA-Z0-9._%+-]{4,}@(gmail\.com|yahoo\.com|outlook\.com)$/; 

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid  email" });
  }

  // Password validation
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

  if (!passwordRegex.test(password)) {
    return res.status(400).json({ message: "Password must be 6+ chars with letters and numbers" });
  }

  // Sab kuch theek to chalo next controller
  next();
};

module.exports = loginAuth;
