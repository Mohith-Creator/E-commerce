import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, mobile }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <h3>Welcome to LOGO</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="firstName">
            <i className="fa-solid fa-user"></i>
          </label>
          <input
            type="text"
            id="firstName"
            className="input-text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="lastName">
            <i className="fa-solid fa-user"></i>
          </label>
          <input
            type="text"
            id="lastName"
            className="input-text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="email">
            <i className="fa-regular fa-envelope"></i>
          </label>
          <input
            type="email"
            id="email"
            className="input-text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="mobile">
            <i className="fa-solid fa-phone"></i>
          </label>
          <input
            type="tel"
            id="mobile"
            className="input-text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Sign Up
        </button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
