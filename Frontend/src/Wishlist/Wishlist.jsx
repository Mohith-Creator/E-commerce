import React, { useEffect, useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./wishlist.css";

function WishlistPage() {
  const { wishlistItems } = useWishlist();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  return (
    <>
      <Navbar />
      <div className="wishlist-container">
        <h2>My Wishlist</h2>

        {!isLoggedIn ? (
          <p className="empty-text">Please login to view your wishlist.</p>
        ) : wishlistItems.length === 0 ? (
          <p className="empty-text">No items in wishlist.</p>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((item, index) => (
              <div key={index} className="wishlist-product">
                <img
                  src={item.imgList[0]}
                  alt={item.title}
                  className="product-image"
                />
                <div className="product-content">
                  <div className="product-title">{item.title}</div>
                  <div className="product-description">{item.description}</div>
                  <div className="product-price">
                    {item.originalPrice && (
                      <span className="original-price">
                        ${item.originalPrice}
                      </span>
                    )}
                    <span className="discounted-price">
                      ${item.discountedPrice || item.originalPrice}
                    </span>
                  </div>
                  <div className="cardbuttons">
                    <button
                      className="addtocart"
                      onClick={() => console.log("Add to Cart:", item.title)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="wishlists"
                      onClick={() =>
                        console.log("Remove from Wishlist:", item.title)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default WishlistPage;
