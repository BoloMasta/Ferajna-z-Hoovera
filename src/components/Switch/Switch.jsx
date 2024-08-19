import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./Switch.module.scss";
import { breakpoints } from "../../assets/breakpoints";

const Switch = ({ active, setActive }) => {
  const scrollToDown = useCallback(() => {
    const scrollTop = window.innerWidth < 768 ? 310 : window.innerWidth < 1280 ? 465 : 550;

    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
  }, []);

  const handleMouseEnter = (id) => {
    document.getElementById(id)?.classList.add(styles.titleActive);
  };

  const handleMouseLeave = (id) => {
    if (active !== id) {
      document.getElementById(id)?.classList.remove(styles.titleActive);
    }
  };

  return (
    <section className={styles.switch}>
      <div className={styles.gallery}>
        <picture>
          <source media={breakpoints.mobile} srcSet="../images/about/switch/ozespole_mobile.jpg" />
          <source media={breakpoints.tablet} srcSet="../images/about/switch/ozespole_tablet.jpg" />
          <source media={breakpoints.desktop} srcSet="../images/about/switch/ozespole.jpg" />
          <img
            src="../images/about/switch/ozespole.jpg"
            alt="Zdjęcie zespołu Ferajna z Hoovera"
            className={`${styles.leftImage} ${active === "left" ? styles.imageActive : ""}`}
            id="leftImage"
            onMouseEnter={() => handleMouseEnter("leftTitle")}
            onMouseLeave={() => handleMouseLeave("leftTitle")}
            onClick={() => {
              setActive("left");
              scrollToDown();
            }}
          />
        </picture>
        <picture>
          <source
            media={breakpoints.mobile}
            srcSet="../images/about/switch/czlonkowie_mobile.jpg"
          />
          <source
            media={breakpoints.tablet}
            srcSet="../images/about/switch/czlonkowie_tablet.jpg"
          />
          <source media={breakpoints.desktop} srcSet="../images/about/switch/czlonkowie.jpg" />
          <img
            src="../images/about/switch/czlonkowie.jpg"
            alt="Zdjęcie zespołu Ferajna z Hoovera"
            className={`${styles.rightImage} ${active === "right" ? styles.imageActive : ""}`}
            id="rightImage"
            onMouseEnter={() => handleMouseEnter("rightTitle")}
            onMouseLeave={() => handleMouseLeave("rightTitle")}
            onClick={() => {
              setActive("right");
              scrollToDown();
            }}
          />
        </picture>
        <h2
          className={`${styles.title} ${active === "left" ? styles.titleActive : ""}`}
          id="leftTitle"
        >
          O zespole
        </h2>
        <h2
          className={`${styles.title} ${active === "right" ? styles.titleActive : ""}`}
          id="rightTitle"
        >
          Członkowie
        </h2>
      </div>
    </section>
  );
};

Switch.propTypes = {
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Switch;
