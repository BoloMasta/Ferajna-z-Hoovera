import propsTypes from "prop-types";
import styles from "./HamburgerMenu.module.scss";

const HamburgerMenu = ({ props }) => {
  const { isMenuOpen, setIsMenuOpen } = props;

  return (
    <div
      className={isMenuOpen ? `${styles.hamburgerMenu} ${styles.open}` : styles.hamburgerMenu}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <div className={styles.icon}></div>
    </div>
  );
};

export default HamburgerMenu;

HamburgerMenu.propTypes = {
  props: propsTypes.object,
  isMenuOpen: propsTypes.bool,
  setIsMenuOpen: propsTypes.func,
};
