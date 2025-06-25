import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import "./Navbar.css";

function Navbar({ onMenClick, onWomenClick }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");

    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    const handleStorageChange = () => {
      const updatedStatus = localStorage.getItem("isLoggedIn");
      setIsLoggedIn(updatedStatus === "true");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1
          className="logo"
          onClick={() => {
            if (window.location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              navigate("/?scroll=top");
            }
          }}
        >
          LOGO
        </h1>
      </div>

      <div className="nav-middle">
        <ul className="nav-links">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname === "/") {
                  onMenClick?.();
                } else {
                  navigate("/?scroll=men");
                }
              }}
            >
              MEN
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname === "/") {
                  onWomenClick?.();
                } else {
                  navigate("/?scroll=women");
                }
              }}
            >
              WOMEN
            </a>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <div className="search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="search"
            placeholder="Search for Brands and more.."
          />
        </div>

        <div className="user-profile">
          <i className="fa-regular fa-user"></i>
          <p>Profile</p>
          <div className="dropdown-menu">
            <div className="dropdown-header">
              <p className="username">Hello MOHITH</p>
              <p className="user-phone">9949913299</p>
            </div>
            <ul className="dropdown-links">
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/giftcards">Gift Cards</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/insider">
                  Myntra Insider <span className="new-badge">New</span>
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/credit">Myntra Credit</Link>
              </li>
              <li>
                <Link to="/coupons">Coupons</Link>
              </li>
              <li>
                <Link to="/cards">Saved Cards</Link>
              </li>
              <li>
                <Link to="/vpa">Saved VPA</Link>
              </li>
              <li>
                <Link to="/addresses">Saved Addresses</Link>
              </li>
              <hr />
              <li>
                <Link to="/profile">Edit Profile</Link>
              </li>
              {isLoggedIn ? (
                <li
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    setIsLoggedIn(false);
                    window.location.reload();
                  }}
                >
                  Logout
                </li>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div
          className="wishlist"
          onClick={() => navigate("/wishlist")}
          style={{ position: "relative" }}
        >
          <i className="fa-regular fa-heart"></i>
          <p>Wishlist</p>
          {wishlistCount > 0 && (
            <span
              className="wishlist-badge"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                background: "red",
                borderRadius: "50%",
                width: "16px",
                height: "16px",
                fontSize: "12px",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {wishlistCount}
            </span>
          )}
        </div>

        <div className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>Cart</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
