import PropTypes from "prop-types";
import styles from "./HamburgerMenu.module.scss";

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen, isViewOnTop }) => {
  const prevState = isMenuOpen;

  return (
    <div
      className={`${styles.hamburgerMenu} ${!isViewOnTop ? styles.small : ""} ${
        isMenuOpen ? styles.open : ""
      }`}
      onClick={() => setIsMenuOpen(!prevState)}
    >
      <div className={styles.icon}></div>
    </div>
  );
};

export default HamburgerMenu;

HamburgerMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  isViewOnTop: PropTypes.bool.isRequired,
};
