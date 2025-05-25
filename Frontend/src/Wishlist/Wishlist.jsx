import React, { useContext, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/login.json";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Wishlist.css";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleLoginRedirect = () => {
    navigate("/login", { state: { from: "/wishlist" } });
  };

  if (!user) {
    return (
      <div className="wishlist-page">
        <Navbar />
        <div className="wishlist-container">
          <h2 className="wishlist-heading">PLEASE LOG IN</h2>
          <p className="wishlist-subtext">
            Login to view items in your wishlist.
          </p>
          <div className="wishlist-animation">
            <Lottie animationData={animationData} loop={true} />
          </div>
          <button
            className="wishlist-login-button"
            onClick={handleLoginRedirect}
          >
            Login
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <Navbar />
      <div className="wishlist-loggedin">
        <h2>Your Wishlist</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
