import { useState, useEffect, Suspense } from "react";
import { Outlet } from "react-router-dom";
import propTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import "./Layout.scss";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isViewOnTop, setIsViewOnTop] = useState(true);

  useEffect(() => {
    function onScroll() {
      setIsViewOnTop(window.scrollY === 0);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isViewOnTop={isViewOnTop}
        setIsViewOnTop={setIsViewOnTop}
      />
      <main>
        <div className="container">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: propTypes.node,
};
