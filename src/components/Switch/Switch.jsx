import propTypes from "prop-types";
import styles from "./Switch.module.scss";

const Switch = (props) => {
  if (props.active === "left") {
    document.getElementById("leftTitle").className = `${styles.title} ${styles.titleActive}`;
    document.getElementById("rightTitle").className = `${styles.title}`;
  } else if (props.active === "right") {
    document.getElementById("leftTitle").className = `${styles.title}`;
    document.getElementById("rightTitle").className = `${styles.title} ${styles.titleActive}`;
  }

  return (
    <section className={styles.switch}>
      <div className={styles.gallery}>
        <img
          src="../images/skwer1.jpg"
          alt="Archer"
          id={styles.leftImage}
          onMouseEnter={() => {
            document.getElementById(
              "leftTitle"
            ).className = `${styles.title} ${styles.titleActive}`;
          }}
          // onMouseLeave={() => {
          //   document.getElementById("leftTitle").className = `${styles.title}`;
          // }}
          onClick={() => props.setActive("left")}
        />
        <img
          src="../images/skwer3.jpg"
          alt="Saber"
          id={styles.rightImage}
          onMouseEnter={() => {
            document.getElementById(
              "rightTitle"
            ).className = `${styles.title} ${styles.titleActive}`;
          }}
          // onMouseLeave={() => {
          //   document.getElementById("rightTitle").className = `${styles.title}`;
          // }}
          onClick={() => props.setActive("right")}
        />
        <h2 className={`${styles.title} `} id="leftTitle">
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
