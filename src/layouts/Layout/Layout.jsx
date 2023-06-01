import { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import propTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <div className="container">
          <Suspense fallback={<div>Ładowanie...</div>}>
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
