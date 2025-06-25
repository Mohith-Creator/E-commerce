import React, { useState, useEffect } from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWishlist } from "../context/WishlistContext";

function Card({
  imgList,
  title,
  description,
  originalPrice,
  discountedPrice,
  offer,
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false); // ✅ New state
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    let interval;
    if (isHovered && imgList.length > 1) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % imgList.length);
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isHovered, imgList.length]);

  const handleWishlistClick = (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (!isWishlisted) {
    addToWishlist({
      imgList,
      title,
      description,
      originalPrice,
      discountedPrice,
      offer,
    });
    setIsWishlisted(true);
    toast.success("Added to wishlist!");
  }
};


  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImage(0);
      }}
    >
      {offer && <div className="offer-badge">{offer}</div>}
      <img src={imgList[currentImage]} alt={title} className="product-image" />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="cardprice">
          {discountedPrice ? (
            <>
              <span className="originalprice">${originalPrice}</span>
              <span className="discountedprice">${discountedPrice}</span>
            </>
          ) : (
            <span className="discountedprice">${originalPrice}</span>
          )}
        </div>
        <div className="cardbuttons">
          <button
            className="wishlists"
            onClick={handleWishlistClick}
            disabled={isWishlisted}
            style={{
              opacity: isWishlisted ? 0.6 : 1,
              cursor: isWishlisted ? "not-allowed" : "pointer",
            }}
          >
            <FontAwesomeIcon
              icon={faHeartRegular}
              style={{ marginRight: "8px" }}
            />
            {isWishlisted ? "Wishlisted" : "Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
