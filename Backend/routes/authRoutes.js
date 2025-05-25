import express from "express";
import User from "../models/User.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

const router = express.Router();

let otpStore = {}; // Temporary in-memory store (can be replaced by DB or Redis)

// Send OTP
router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otp = Math.floor(1000 + Math.random() * 9000); // 4-digit OTP
    otpStore[email] = otp;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_ID,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "OTP sent to your email." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error sending OTP", error: error.message });
  }
});

// Verify OTP
router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  const storedOtp = otpStore[email];
  if (parseInt(otp) === storedOtp) {
    delete otpStore[email]; // Optional: clear OTP once used
    return res.status(200).json({ message: "OTP verified successfully." });
  }

  res.status(400).json({ message: "Invalid OTP" });
});
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, mobile } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ firstName, lastName, email, mobile });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
