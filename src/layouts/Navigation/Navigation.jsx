import { NavLink } from "react-router-dom";
import { animateScroll } from "react-scroll";
import PropTypes from "prop-types";
import styles from "./Navigation.module.scss";

const handleNavClick = (setIsMenuOpen) => {
  if (typeof setIsMenuOpen === "function") {
    setIsMenuOpen(false);
  }

  animateScroll.scrollToTop({
    duration: 500,
    smooth: true,
    easing: "easeInOutQuart",
  });
};

const Navigation = ({ setIsMenuOpen }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {[
          { to: "/", label: "Strona główna" },
          { to: "/onas", label: "O nas" },
          { to: "/muzyka", label: "Muzyka" },
          { to: "/galeria", label: "Galeria" },
          { to: "/kontakt", label: "Kontakt" },
        ].map(({ to, label }) => (
          <li className={styles.item} key={to}>
            <NavLink
              to={to}
              onClick={() => handleNavClick(setIsMenuOpen)}
              className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  setIsMenuOpen: PropTypes.func,
};

export default Navigation;
