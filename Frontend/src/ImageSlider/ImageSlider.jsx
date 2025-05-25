import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import Slide1 from "../assets/blackbackground.webp";
import Slide2 from "../assets/blackbackground.webp";

const ImageSlider = ({ interval = 3000 }) => {
  const images = [Slide1, Slide2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(sliderInterval);
  }, [images.length, interval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="prev-button" onClick={prevSlide}>
        ❮
      </button>
      <div className="image-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slider-image ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
      <button className="next-button" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};


export default ImageSlider;