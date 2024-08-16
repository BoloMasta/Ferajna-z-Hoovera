import Media from "react-media";
import { Img } from "react-image";
import PropTypes from "prop-types";
import Navigation from "../Navigation/Navigation";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import logo from "/images/logo.png";
import { breakpoints } from "../../assets/breakpoints";
import styles from "./Header.module.scss";

const Header = ({ isMenuOpen, isViewOnTop, setIsMenuOpen }) => {
  return (
    <header className={`${styles.header} ${!isViewOnTop && styles.smallHeader}`}>
      <div className={`${styles.container} ${!isViewOnTop && styles.smallContainer}`}>
        <Img
          src={logo}
          alt="Logo Ferajny z Hoovera"
          className={`${styles.logo} ${!isViewOnTop && styles.small}`}
          loading="lazy"
        />

        <Media queries={breakpoints}>
          {(matches) => (
            <>
              {matches.mobile && (
                <HamburgerMenu
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                  isViewOnTop={isViewOnTop}
                />
              )}
              {(matches.tablet || matches.desktop) && <Navigation setIsMenuOpen={setIsMenuOpen} />}
            </>
          )}
        </Media>
      </div>

      <div className={isMenuOpen ? `${styles.modalMenu} ${styles.open}` : styles.modalMenu}>
        <Navigation setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  isMenuOpen: PropTypes.bool,
  isViewOnTop: PropTypes.bool,
  setIsMenuOpen: PropTypes.func,
};
