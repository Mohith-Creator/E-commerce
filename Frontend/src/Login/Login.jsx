import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [timer, setTimer] = useState(30);
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailRegex.test(email);
  };

  // Handle input change for email
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Clear any existing messages while typing
    if (message) {
      setMessage("");
    }
  };

  // Handle OTP input change
  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (value.match(/^\d$/)) {
      // Only accept digits
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus next input after entering a digit
      if (index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  // Handle keydown for backspace to focus the previous input
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault(); // Prevent default backspace behavior

      const newOtp = [...otp];
      if (otp[index] !== "") {
        // If current input is not empty, clear it
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // If current is empty, move to previous and clear it
        document.getElementById(`otp-input-${index - 1}`).focus();
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    }
  };

  // Handle form submission for email
  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message);
      if (res.ok) setOtpSent(true);
    } catch (err) {
      setMessage("Something went wrong. Try again.");
      console.error(err);
    }
  };
  const handleResendOtp = async () => {
    setIsResending(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message);
      if (res.ok) {
        setOtp(Array(4).fill("")); // Reset OTP
        setTimer(30); // Restart timer
      }
    } catch (err) {
      setMessage("Failed to resend OTP. Try again.");
    } finally {
      setIsResending(false);
    }
  };

  // Handle OTP submission
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");

    if (otpValue.length === 4) {
      try {
        const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp: otpValue }),
        });

        const data = await res.json();
        setMessage(data.message);

        if (res.ok) {
          localStorage.setItem("isLoggedIn", "true"); // ✅ Save login state
          navigate("/"); // ✅ Redirect to home
        }
      } catch (err) {
        setMessage("Server error. Try again.");
      }
    } else {
      setMessage("Please enter a valid 4-digit OTP.");
    }
  };

  // Focus the first OTP input field when OTP form is displayed
  useEffect(() => {
    if (otpSent) {
      document.getElementById("otp-input-0").focus();
    }
  }, [otpSent]);

  useEffect(() => {
    let countdown;
    if (otpSent && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [otpSent, timer]);

  return (
    <div className="login-container">
      <h3>Welcome to LOGO</h3>
      {!otpSent ? (
        <form onSubmit={handleEmailSubmit}>
          <div className="input-container">
            <label htmlFor="email">
              <i className="fa-regular fa-envelope"></i>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="input-text"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          {message && (
            <p
              className={`message ${
                validateEmail(email) ? "success" : "error"
              }`}
            >
              {message}
            </p>
          )}
          <button type="submit" className="login-btn">
            Generate OTP
          </button>
          <p>
            New User? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit}>
          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="otp-input"
                placeholder="-"
              />
            ))}
          </div>
          {message && <p className="message">{message}</p>}
          <button type="submit" className="login-btn">
            Verify OTP
          </button>
          <p className="resend-otp">
            Didn’t receive the code?{" "}
            {timer > 0 ? (
              <span>Resend in {timer}s</span>
            ) : (
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={isResending}
                className="resend-btn"
              >
                {isResending ? "Resending..." : "Resend OTP"}
              </button>
            )}
          </p>
        </form>
      )}
    </div>
  );
}

export default Login;
