import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ScrollHandler({ onMenClick, onWomenClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTarget = params.get("scroll");

    if (scrollTarget === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (scrollTarget === "men") {
      onMenClick?.();
    } else if (scrollTarget === "women") {
      onWomenClick?.();
    }

    if (scrollTarget) {
      const newUrl = location.pathname;
      navigate(newUrl, { replace: true });
    }
  }, [location.search]);

  return null;
}

export default ScrollHandler;
