import propsTypes from "prop-types";
import styles from "./HamburgerMenu.module.scss";

const HamburgerMenu = ({ props }) => {
  const { isMenuOpen, setIsMenuOpen, isViewOnTop } = props;

  return (
    <div
      className={
        styles.hamburgerMenu +
        " " +
        (!isViewOnTop && styles.small) +
        " " +
        (isMenuOpen && styles.open)
      }
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
  isViewOnTop: propsTypes.bool,
};
