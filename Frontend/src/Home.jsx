import React, { useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
import ImageSlider from "./ImageSlider/ImageSlider.jsx";
import TopHeading from "./Headings/TopHeadings/TopHeading.jsx";
import SeasonalHeading from "./Headings/SeasonalHeadings/SeasonalHeadings.jsx";
import Login from "./Login/Login.jsx";
import Signup from "./Signup/Signup.jsx";
import Profile from "./Profile/Profile.jsx";
import Traditional from "./Headings/Traditional/Traditional.jsx";
import Modern from "./Headings/Modern/Modern.jsx";
import ProductPage from "./ProductPage/ProductPage.jsx";
import Footer from "./Footer/Footer.jsx";
import WishlistPage from "./Wishlist/Wishlist.jsx";
import ScrollHandler from "./ScrollHandler/ScrollHandler.jsx";

function Layout({ children, onMenClick, onWomenClick }) {
  const location = useLocation();
  const noNavbarRoutes = ["/login", "/signup"];

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && (
        <Navbar onMenClick={onMenClick} onWomenClick={onWomenClick} />
      )}
      {children}
    </>
  );
}

function Home() {
  const menToggleRef = useRef(null);
  const girlsTopRef = useRef(null);

  const handleScrollToMen = () => {
    menToggleRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGirlsTop = () => {
    girlsTopRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              onMenClick={handleScrollToMen}
              onWomenClick={scrollToGirlsTop}
            >
              <ScrollHandler
                onMenClick={handleScrollToMen}
                onWomenClick={scrollToGirlsTop}
              />
              <ImageSlider />
              <SeasonalHeading toggleRef={menToggleRef} />
              <TopHeading />
              <div ref={girlsTopRef}>
                <Traditional />
              </div>
              <Modern />
              <Footer />
            </Layout>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/product/:category/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default Home;
