import { NavLink } from "react-router-dom";
import { animateScroll } from "react-scroll";
import propsTypes from "prop-types";
import styles from "./Navigation.module.scss";

const Navigation = ({ props }) => {
  const { setIsMenuOpen } = props;

  return (
    <nav className={styles.nav}>
      <ul
        className={styles.list}
        onClick={() => {
          setIsMenuOpen(false);
          animateScroll.scrollToTop({
            duration: 500,
            smooth: true,
            easing: "easeInOutQuart",
          });
        }}
      >
        <li className={styles.item}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
          >
            Strona główna
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
          >
            O nas
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink
            to="/music"
            className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
          >
            Muzyka
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
          >
            Galeria
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

Navigation.propTypes = {
  props: propsTypes.object,
  setIsMenuOpen: propsTypes.func,
};
