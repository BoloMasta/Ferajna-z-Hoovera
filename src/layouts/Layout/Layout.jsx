import { useState, useEffect, Suspense } from "react";
import { Outlet } from "react-router-dom";
import propTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import "./Layout.scss";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      window.onscroll = () => {
        window.scrollTo(0, 0);
      };
    } else {
      window.onscroll = () => {
        window.scrollTo(0, window.scrollY);
      };
    }
  }, [isMenuOpen]);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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
