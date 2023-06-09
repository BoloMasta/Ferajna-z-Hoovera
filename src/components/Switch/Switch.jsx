import propTypes from "prop-types";
import styles from "./Switch.module.scss";

const Switch = (props) => {
  const leftImage = document.getElementById("Switch-module__leftImage");
  const rightImage = document.getElementById("Switch-module__rightImage");
  const leftTitle = document.getElementById("leftTitle");
  const rightTitle = document.getElementById("rightTitle");

  if (props.active === "left") {
    leftTitle.className = `${styles.title} ${styles.titleActive}`;
    rightTitle.className = `${styles.title}`;
    leftImage.className = `${styles.image} ${styles.imageActive}`;
    rightImage.className = `${styles.image}`;
  } else if (props.active === "right") {
    leftTitle.className = `${styles.title}`;
    rightTitle.className = `${styles.title} ${styles.titleActive}`;
    rightImage.className = `${styles.image} ${styles.imageActive}`;
    leftImage.className = `${styles.image}`;
  }

  return (
    <section className={styles.switch}>
      <div className={styles.gallery}>
        <img
          src="../images/skwer1.jpg"
          alt="Zdjęcie zespołu Ferajna z Hoovera"
          className={styles.image}
          id={styles.leftImage}
          onMouseEnter={() => {
            document.getElementById("leftTitle").className = `${styles.title} ${styles.titleActive}`;
          }}
          onMouseLeave={() => {
            (props.active === "left" &&
              (document.getElementById("leftTitle").className = `${styles.title} ${styles.titleActive}`)) ||
              (document.getElementById("leftTitle").className = `${styles.title}`);
          }}
          onClick={() => props.setActive("left")}
        />
        <img
          src="../images/skwer3.jpg"
          alt="Zdjęcie zespołu Ferajna z Hoovera"
          className={styles.image}
          id={styles.rightImage}
          onMouseEnter={() => {
            document.getElementById("rightTitle").className = `${styles.title} ${styles.titleActive}`;
          }}
          onMouseLeave={() => {
            (props.active === "right" &&
              (document.getElementById("rightTitle").className = `${styles.title} ${styles.titleActive}`)) ||
              (document.getElementById("rightTitle").className = `${styles.title}`);
          }}
          onClick={() => props.setActive("right")}
        />
        <h2 className={styles.title} id="leftTitle">
          O zespole
        </h2>
        <h2 className={styles.title} id="rightTitle">
          Członkowie
        </h2>
      </div>
    </section>
  );
};

export default Switch;

Switch.propTypes = {
  active: propTypes.string,
  setActive: propTypes.func.isRequired,
};
