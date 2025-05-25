import "./Modern.css";
import Card from "../../Cards/Cards.jsx";
import Buttons from "../../Button/Button.jsx";
import dress11 from "../../assets/dresses/dress11.jpg";
import dress12 from "../../assets/dresses/dress12.jpg";
import dress13 from "../../assets/dresses/dress13.jpg";
import dress14 from "../../assets/dresses/dress14.jpg";
import dress21 from "../../assets/dresses/dress21.jpg";
import dress22 from "../../assets/dresses/dress22.jpg";
import dress23 from "../../assets/dresses/dress23.jpg";
import dress24 from "../../assets/dresses/dress24.jpg";
import dress31 from "../../assets/dresses/dress31.jpg";
import dress32 from "../../assets/dresses/dress32.jpg";
import dress33 from "../../assets/dresses/dress33.jpg";
import dress34 from "../../assets/dresses/dress34.jpg";
import dress41 from "../../assets/dresses/dress41.jpg";
import dress42 from "../../assets/dresses/dress42.jpg";
import dress43 from "../../assets/dresses/dress43.jpg";
import dress44 from "../../assets/dresses/dress44.jpg";
import dress51 from "../../assets/dresses/dress51.jpg";
import dress52 from "../../assets/dresses/dress52.jpg";
import dress53 from "../../assets/dresses/dress53.jpg";
import dress54 from "../../assets/dresses/dress54.jpg";
import dress61 from "../../assets/dresses/dress61.jpg";
import dress62 from "../../assets/dresses/dress62.jpg";
import dress63 from "../../assets/dresses/dress63.jpg";
import dress64 from "../../assets/dresses/dress64.jpg";
import dress71 from "../../assets/dresses/dress71.jpg";
import dress72 from "../../assets/dresses/dress72.jpg";
import dress73 from "../../assets/dresses/dress73.jpg";
import dress74 from "../../assets/dresses/dress74.jpg";
import dress81 from "../../assets/dresses/dress81.jpg";
import dress82 from "../../assets/dresses/dress82.jpg";
import dress83 from "../../assets/dresses/dress83.jpg";
import dress84 from "../../assets/dresses/dress84.jpg";
import dress91 from "../../assets/dresses/dress91.jpg";
import dress92 from "../../assets/dresses/dress92.jpg";
import dress93 from "../../assets/dresses/dress93.jpg";
import dress94 from "../../assets/dresses/dress94.jpg";
import dress101 from "../../assets/dresses/dress101.jpg";
import dress102 from "../../assets/dresses/dress102.jpg";
import dress103 from "../../assets/dresses/dress103.jpg";
import dress104 from "../../assets/dresses/dress104.jpg";
import top11 from "../../assets/tops/top11.jpg";
import top12 from "../../assets/tops/top12.jpg";
import top13 from "../../assets/tops/top13.jpg";
import top14 from "../../assets/tops/top14.jpg";
import top21 from "../../assets/tops/top21.jpg";
import top22 from "../../assets/tops/top22.jpg";
import top23 from "../../assets/tops/top23.jpg";
import top24 from "../../assets/tops/top24.jpg";
import top31 from "../../assets/tops/top31.jpg";
import top32 from "../../assets/tops/top32.jpg";
import top33 from "../../assets/tops/top33.jpg";
import top34 from "../../assets/tops/top34.jpg";
import top41 from "../../assets/tops/top41.jpg";
import top42 from "../../assets/tops/top42.jpg";
import top43 from "../../assets/tops/top43.jpg";
import top44 from "../../assets/tops/top44.jpg";
import top51 from "../../assets/tops/top51.jpg";
import top52 from "../../assets/tops/top52.jpg";
import top53 from "../../assets/tops/top53.jpg";
import top54 from "../../assets/tops/top54.jpg";
import top61 from "../../assets/tops/top61.jpg";
import top62 from "../../assets/tops/top62.jpg";
import top63 from "../../assets/tops/top63.jpg";
import top64 from "../../assets/tops/top64.jpg";
import top71 from "../../assets/tops/top71.jpg";
import top72 from "../../assets/tops/top72.jpg";
import top73 from "../../assets/tops/top73.jpg";
import top74 from "../../assets/tops/top74.jpg";
import top81 from "../../assets/tops/top81.jpg";
import top82 from "../../assets/tops/top82.jpg";
import top83 from "../../assets/tops/top83.jpg";
import top84 from "../../assets/tops/top84.jpg";
import bottom11 from "../../assets/bottoms/bottom11.jpg";
import bottom12 from "../../assets/bottoms/bottom12.jpg";
import bottom13 from "../../assets/bottoms/bottom13.jpg";
import bottom14 from "../../assets/bottoms/bottom14.jpg";
import bottom21 from "../../assets/bottoms/bottom21.jpg";
import bottom22 from "../../assets/bottoms/bottom22.jpg";
import bottom23 from "../../assets/bottoms/bottom23.jpg";
import bottom24 from "../../assets/bottoms/bottom24.jpg";
import bottom31 from "../../assets/bottoms/bottom31.jpg";
import bottom32 from "../../assets/bottoms/bottom32.jpg";
import bottom33 from "../../assets/bottoms/bottom33.jpg";
import bottom34 from "../../assets/bottoms/bottom34.jpg";
import bottom41 from "../../assets/bottoms/bottom41.jpg";
import bottom42 from "../../assets/bottoms/bottom42.jpg";
import bottom43 from "../../assets/bottoms/bottom43.jpg";
import bottom44 from "../../assets/bottoms/bottom44.jpg";
import bottom51 from "../../assets/bottoms/bottom51.jpg";
import bottom52 from "../../assets/bottoms/bottom52.jpg";
import bottom53 from "../../assets/bottoms/bottom53.jpg";
import bottom54 from "../../assets/bottoms/bottom54.jpg";
import bottom61 from "../../assets/bottoms/bottom61.jpg";
import bottom62 from "../../assets/bottoms/bottom62.jpg";
import bottom63 from "../../assets/bottoms/bottom63.jpg";
import bottom64 from "../../assets/bottoms/bottom64.jpg";
import bottom71 from "../../assets/bottoms/bottom71.jpg";
import bottom72 from "../../assets/bottoms/bottom72.jpg";
import bottom73 from "../../assets/bottoms/bottom73.jpg";
import bottom74 from "../../assets/bottoms/bottom74.jpg";
import bottom81 from "../../assets/bottoms/bottom81.jpg";
import bottom82 from "../../assets/bottoms/bottom82.jpg";
import bottom83 from "../../assets/bottoms/bottom83.jpg";
import bottom84 from "../../assets/bottoms/bottom83.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Modern() {
  const [activeButton, setActiveButton] = useState("DRESS");
  const [visibleCount, setVisibleCount] = useState(5);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setVisibleCount(5);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const cardData = {
    DRESS: [
      {
        imgList: [dress11, dress12, dress13, dress14],
        title: "Snitch",
        description: "Black Fisherman Knit Sweater",
        originalPrice: "INR 2,299",
        discountedPrice: "INR 1,599",
        offer: "30% OFF",
      },
      {
        imgList: [dress21, dress22, dress23, dress24],
        title: "Snitch",
        description: "Black Fisherman Knit Sweater",
        originalPrice: "INR 1,999",
        discountedPrice: "INR 1,599",
        offer: "20% OFF",
      },
      {
        imgList: [dress31, dress32, dress33, dress34],
        title: "Snitch",
        description: "Black Fisherman Knit Sweater",
        originalPrice: "INR 1,999",
        discountedPrice: "INR 1,599",
        offer: "20% OFF",
      },
      {
        imgList: [dress41, dress42, dress43, dress44],
        title: "Snitch",
        description: "Black Fisherman Knit Sweater",
        originalPrice: "INR 1,999",
        discountedPrice: "INR 1,599",
        offer: "20% OFF",
      },
      {
        imgList: [dress51, dress52, dress53, dress54],
        title: "Snitch",
        description: "Black Fisherman Knit Sweater",
        originalPrice: "INR 1,999",
        discountedPrice: "INR 1,599",
        offer: "20% OFF",
      },
      {
        imgList: [dress61, dress62, dress63, dress64],
        title: "Snitch",
        description: "Black Fisherman Knit Sweater",
        originalPrice: "INR 1,999",
        discountedPrice: "INR 1,599",
        offer: "20% OFF",
      },
      {
        imgList: [dress71, dress72, dress73, dress74],
        title: "Snitch",
        description: "Black Fisherman Knit Sweater",
        originalPrice: "INR 1,999",
        discountedPrice: "INR 1,599",
        offer: "20% OFF",
      },
      {
        imgList: [dress81, dress82, dress83, dress84],
        title: "Snitch",
        description: "Black Fisherman Knit Sweater",
        originalPrice: "INR 1,999",
        discountedPrice: "INR 1,599",
        offer: "20% OFF",
      },
      {
        imgList: [dress91, dress92, dress93, dress94],
        title: "Snitch",
        description: "Black Fisherman Knit Sweater",
        originalPrice: "INR 1,999",
        discountedPrice: "INR 1,599",
        offer: "20% OFF",
      },
      {
        imgList: [dress101, dress102, dress103, dress104],
        title: "Snitch",
        description: "Black Fisherman Knit Sweater",
        originalPrice: "INR 1,999",
        discountedPrice: "INR 1,599",
        offer: "20% OFF",
      },
    ],
    TOPS: [
      {
        imgList: [top11, top12, top13, top14],
        title: "Snitch",
        description: "Off White Relaxed Jacket",
        originalPrice: "INR 1,599",
        discountedPrice: "INR 999",
        offer: "38% OFF",
      },
      {
        imgList: [top21, top22, top23, top24],
        title: "Snitch",
        description: "Navy Double Pocket Jacket",
        originalPrice: "INR 1,599",
        discountedPrice: "INR 999",
        offer: "38% OFF",
      },
      {
        imgList: [top31, top32, top33, top34],
        title: "Snitch",
        description: "Olive Puffer Jacket",
        originalPrice: "INR 1,599",
        discountedPrice: "INR 999",
        offer: "38% OFF",
      },
      {
        imgList: [top41, top42, top43, top44],
        title: "Snitch",
        description: "Olive Multi-zip Jacket",
        originalPrice: "INR 1,599",
        discountedPrice: "INR 999",
        offer: "38% OFF",
      },
      {
        imgList: [top51, top52, top53, top54],
        title: "Snitch",
        description: "Olive Sleeveless Jacket",
        originalPrice: "INR 1,599",
        discountedPrice: "INR 999",
        offer: "38% OFF",
      },
      {
        imgList: [top61, top62, top63, top64],
        title: "Snitch",
        description: "Olive Sleeveless Jacket",
        originalPrice: "INR 1,599",
        discountedPrice: "INR 999",
        offer: "38% OFF",
      },
      {
        imgList: [top71, top72, top73, top74],
        title: "Snitch",
        description: "Olive Sleeveless Jacket",
        originalPrice: "INR 1,599",
        discountedPrice: "INR 999",
        offer: "38% OFF",
      },
      {
        imgList: [top81, top82, top83, top84],
        title: "Snitch",
        description: "Olive Sleeveless Jacket",
        originalPrice: "INR 1,599",
        discountedPrice: "INR 999",
        offer: "38% OFF",
      },
    ],
    BOTTOMS: [
      {
        imgList: [bottom11, bottom12, bottom13, bottom14],
        title: "Snitch",
        description: "Navy Double Pocket Jacket",
        originalPrice: "INR 1,399",
        discountedPrice: "INR 999",
        offer: "29% OFF",
      },

      {
        imgList: [bottom61, bottom62, bottom63, bottom64],
        title: "Snitch",
        description: "Navy Double Pocket Jacket",
        originalPrice: "INR 1,399",
        discountedPrice: "INR 999",
        offer: "29% OFF",
      },
      {
        imgList: [bottom31, bottom32, bottom33, bottom34],
        title: "Snitch",
        description: "Navy Double Pocket Jacket",
        originalPrice: "INR 1,399",
        discountedPrice: "INR 999",
        offer: "29% OFF",
      },
      {
        imgList: [bottom41, bottom42, bottom43, bottom44],
        title: "Snitch",
        description: "Navy Double Pocket Jacket",
        originalPrice: "INR 1,399",
        discountedPrice: "INR 999",
        offer: "29% OFF",
      },
      {
        imgList: [bottom51, bottom52, bottom53, bottom54],
        title: "Snitch",
        description: "Navy Double Pocket Jacket",
        originalPrice: "INR 1,399",
        discountedPrice: "INR 999",
        offer: "29% OFF",
      },
      {
        imgList: [bottom21, bottom22, bottom23, bottom24],
        title: "Snitch",
        description: "Navy Double Pocket Jacket",
        originalPrice: "INR 1,399",
        discountedPrice: "INR 999",
        offer: "29% OFF",
      },
      {
        imgList: [bottom81, bottom82, bottom83, bottom84],
        title: "Snitch",
        description: "Navy Double Pocket Jacket",
        originalPrice: "INR 1,399",
        discountedPrice: "INR 999",
        offer: "29% OFF",
      },
      {
        imgList: [bottom71, bottom72, bottom73, bottom74],
        title: "Snitch",
        description: "Navy Double Pocket Jacket",
        originalPrice: "INR 1,399",
        discountedPrice: "INR 999",
        offer: "29% OFF",
      },
    ],
  };

  const currentData = cardData[activeButton];
  const visibleData = currentData.slice(0, visibleCount);

  return (
    <div>
      <div className="seasonal-toggle-group">
        <button
          className={`seasonal-toggle-button ${
            activeButton === "DRESS" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("DRESS")}
        >
          DRESS
        </button>
        <button
          className={`seasonal-toggle-button ${
            activeButton === "TOPS" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("TOPS")}
        >
          TOPS
        </button>
        <button
          className={`seasonal-toggle-button ${
            activeButton === "BOTTOMS" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("BOTTOMS")}
        >
          BOTTOMS
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

export default Modern;
