import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductPage.css";
import Footer from "../Footer/Footer.jsx";
import shipping from "../assets/shipped.svg";
import returns from "../assets/returns.svg";
import payments from "../assets/payment.svg";

function ProductPage() {
  const { category, id } = useParams();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const product = location.state?.card;

  const [inWishlist, setInWishlist] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const handleWishlist = () => {
    setInWishlist(!inWishlist);
    toast.success(
      !inWishlist ? "Added to Wishlist 💖" : "Removed from Wishlist"
    );
  };

  const handleCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size!");
      return;
    }
    setInCart(true);
    toast.success("Added to Cart 🛒");
  };

  if (!product) return <div>Product not found.</div>;

  const galleryImages =
    product.imgList && product.imgList.length > 0
      ? product.imgList
      : [product.imgSrc];
  const [selectedImage, setSelectedImage] = useState(galleryImages[0] || "");

  return (
    <div className="product-page">
      <Navbar />
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="product-container">
        <div className="product-gallery">
          <div className="scrollable-gallery">
            <div className="image-grid">
              {galleryImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Product view ${index + 1}`}
                  className={`grid-image ${
                    selectedImage === src ? "selected" : ""
                  }`}
                  onClick={() => setSelectedImage(src)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="product-info">
          <h2 className="product-brand">{product.title || "Brand Name"}</h2>
          <p className="product-description">{product.description}</p>

          <div className="price-tax-container">
            <div className="price-section">
              <span className="discounted-price">
                ₹{product.discountedPrice}
              </span>
              <span className="original-price">
                MRP ₹{product.originalPrice}
              </span>
              <span className="offer">({product.offer})</span>
            </div>
            <span className="tax-info">inclusive of all taxes</span>
          </div>

          <div className="size-selection">
            <span className="select-size">SIZES</span>
            <div className="size-buttons">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className={`size-btn ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-actions">
            <button
              className={`cart-button ${inCart ? "added" : ""}`}
              onClick={handleCart}
              disabled={inCart}
            >
              👜 {inCart ? "ADDED TO BAG" : "ADD TO BAG"}
            </button>
          </div>

          <div className="extra-features">
            <div className="feature-item">
              <img src={shipping} alt="Shipping" className="feature-icon" />
              <span>Free Shipping</span>
            </div>
            <div className="feature-item">
              <img src={returns} alt="Return" className="feature-icon" />
              <span>Easy Return</span>
            </div>
            <div className="feature-item">
              <img src={payments} alt="Return" className="feature-icon" />
              <span>Secure Payments</span>
            </div>
          </div>

          <div className="product-details-section">
            <h4>Product Details & Overview</h4>
            <div className="product-description-box">
              <div className="product-detail-row">
                <strong>Description:</strong>{" "}
                <span>{product.description || "Polo T-shirt"}</span>
              </div>
              <div className="product-detail-row">
                <strong>Net Quantity:</strong> <span>1N</span>
              </div>
              <div className="product-detail-row">
                <strong>Fit:</strong> <span>Regular Fit</span>
              </div>
              <div className="product-detail-row">
                <strong>Fabric:</strong> <span>60% Cotton, 40% Polyester</span>
              </div>
              <div className="product-detail-row">
                <strong>Country of Origin:</strong> <span>India</span>
              </div>
              <div className="product-detail-row">
                <strong>Manufactured & Marketed By:</strong>{" "}
                <span>Trend Limited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
