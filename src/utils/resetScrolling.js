import { useLayoutEffect } from 'react';
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount and location change
  }, [location.pathname]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;