//import Container from "../Container/Container";
import Media from "react-media";
import propTypes from "prop-types";
import Navigation from "../Navigation/Navigation";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import logo from "/images/logo.png";
import { breakpoints } from "../../assets/breakpoints";
import styles from "./Header.module.scss";

const Header = ({ ...props }) => {
  const { isMenuOpen } = props;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Ferajna z Hoovera logo" className={styles.logo} />
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
  setIsMenuOpen: propTypes.func,
};
