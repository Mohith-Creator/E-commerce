import "./SeasonalHeadings.css";
import Card from "../../Cards/Cards.jsx";
import Buttons from "../../Button/Button.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import cardData from "./seasonalCardData";

function SeasonalHeading({ toggleRef }) {
  const [activeButton, setActiveButton] = useState("SWEATERS");
  const [visibleCount, setVisibleCount] = useState(5);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setVisibleCount(5);
  };
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const currentData = cardData[activeButton];
  const visibleData = currentData.slice(0, visibleCount);
  return (
    <div ref={toggleRef}>
      <div className="seasonal-toggle-group">
        <button
          className={`seasonal-toggle-button ${
            activeButton === "SWEATERS" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("SWEATERS")}
        >
          SWEATERS
        </button>
        <button
          className={`seasonal-toggle-button ${
            activeButton === "JACKETS" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("JACKETS")}
        >
          JACKETS
        </button>
        <button
          className={`seasonal-toggle-button ${
            activeButton === "HOODIES" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("HOODIES")}
        >
          HOODIES
        </button>
      </div>
      <div className="card-container">
        {visibleData.map((card, index) => (
          <Link
            key={index}
            to={`/product/${activeButton.toLowerCase()}/${index}`}
            state={{ card }}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              imgList={card.imgList}
              title={card.title}
              description={card.description}
              originalPrice={card.originalPrice}
              discountedPrice={card.discountedPrice}
              offer={card.offer}
            />
          </Link>
        ))}
      </div>
      <Buttons
        onShowMore={handleShowMore}
        isVisible={visibleCount < currentData.length}
      />
    </div>
  );
}
export default SeasonalHeading;
