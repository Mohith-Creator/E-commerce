// src/pages/WishlistPage.jsx
import React from "react";
import { useWishlist } from "../context/WishlistContext";
import "./wishlist.css"; // create your own styling

function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item, index) => (
            <div key={index} className="wishlist-card">
              <img src={item.imgList[0]} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div>
                <span className="price">
                  ${item.discountedPrice || item.originalPrice}
                </span>
              </div>
              <button onClick={() => removeFromWishlist(item.title)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
