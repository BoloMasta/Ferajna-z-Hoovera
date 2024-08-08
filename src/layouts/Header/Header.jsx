import Media from "react-media";
import { Img } from "react-image";
import propTypes from "prop-types";
import Navigation from "../Navigation/Navigation";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import logo from "/images/logo.png";
import { breakpoints } from "../../assets/breakpoints";
import styles from "./Header.module.scss";

const Header = ({ ...props }) => {
  const { isMenuOpen, isViewOnTop } = props;

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
              {matches.mobile && <HamburgerMenu props={props} />}
              {matches.tablet && <Navigation props={props} />}
              {matches.desktop && <Navigation props={props} />}
            </>
          )}
        </Media>
      </div>

      <div className={isMenuOpen ? `${styles.modalMenu} ${styles.open}` : styles.modalMenu}>
        <Navigation props={props} />
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  props: propTypes.object,
  isMenuOpen: propTypes.bool,
  isViewOnTop: propTypes.bool,
  setIsMenuOpen: propTypes.func,
};
