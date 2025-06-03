
const User = require("../models/user");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const forgotPassword =  async (req, res) => {
    console.log('body==>', req.body);
    
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  // Token generation
  const token = crypto.randomBytes(32).toString("hex");

  // Expiry time set
  user.resetToken = token;
  user.resetTokenExpiry = Date.now() + 120000; // 2 mnt
  await user.save();

  // Email setup
  const transporter = nodemailer.createTransport({
    service: "Gmail", 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const resetLink = `http://localhost:5173/resetPassword/${token}`;

  await transporter.sendMail({
    to: user.email,
    subject: "Password Reset",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password</p>`,
  });

  res.json({ message: "Reset link sent to your email." });
};

module.exports = forgotPassword;
