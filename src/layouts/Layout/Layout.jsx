import { useState, useEffect, useCallback, Suspense, memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import "./Layout.scss";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isViewOnTop, setIsViewOnTop] = useState(true);

  const handleScroll = useCallback(() => {
    setIsViewOnTop(window.scrollY === 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isViewOnTop={isViewOnTop} />
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

const MemoLayout = memo(Layout);

export default MemoLayout;
