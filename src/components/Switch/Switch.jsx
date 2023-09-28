//import ctl from "@netlify/classnames-template-literals";
import propTypes from "prop-types";
import styles from "./Switch.module.scss";
//import ctl from "@netlify/classnames-template-literals";

const Switch = (props) => {
  const leftImage = document.getElementById("leftImage");
  const rightImage = document.getElementById("rightImage");
  const leftTitle = document.getElementById("leftTitle");
  const rightTitle = document.getElementById("rightTitle");

  if (props.active === "left") {
    leftTitle.classList.add(`${styles.titleActive}`);
    rightTitle.classList.remove(`${styles.titleActive}`);

    if (leftImage) leftImage.classList.add(`${styles.imageActive}`);
    if (rightImage) rightImage.classList.remove(`${styles.imageActive}`);

    ///leftImage.classList.add(`${styles.imageActive}`);
    //rightImage.classList.remove(`${styles.imageActive}`);
  } else if (props.active === "right") {
    leftTitle.classList.remove(`${styles.titleActive}`);
    rightTitle.classList.add(`${styles.titleActive}`);

    if (leftImage) leftImage.classList.remove(`${styles.imageActive}`);
    if (rightImage) rightImage.classList.add(`${styles.imageActive}`);
    //rightImage.classList.add(`${styles.imageActive}`);
    //leftImage.classList.remove(`${styles.imageActive}`);
  }

  // if (props.active === "left") {
  //   leftTitle.className = `${styles.title} ${styles.titleActive}`;
  //   rightTitle.className = `${styles.title}`;
  //   leftImage.className = `${styles.image} ${styles.imageActive}`;
  //   rightImage.className = `${styles.image}`;
  // } else if (props.active === "right") {
  //   leftTitle.className = `${styles.title}`;
  //   rightTitle.className = `${styles.title} ${styles.titleActive}`;
  //   rightImage.className = `${styles.image} ${styles.imageActive}`;
  //   leftImage.className = `${styles.image}`;
  // }

  return (
    <section className={styles.switch}>
      <div className={styles.gallery}>
        <img
          src="../images/about/switch/ozespole.jpg"
          alt="Zdjęcie zespołu Ferajna z Hoovera"
          className={styles.leftImage}
          id="leftImage"
          onMouseEnter={() => {
            document.getElementById("leftTitle").classList.add(`${styles.titleActive}`);
            //document.getElementById("leftTitle").className = `${styles.title} ${styles.titleActive}`;
          }}
          onMouseLeave={() => {
            props.active !== "left" &&
              document.getElementById("leftTitle").classList.remove(`${styles.titleActive}`);

            // (props.active === "left" &&
            //   (document.getElementById("leftTitle").className = `${styles.title} ${styles.titleActive}`)) ||
            //   (document.getElementById("leftTitle").className = `${styles.title}`);
          }}
          onClick={() => props.setActive("left")}
        />
        <img
          src="../images/about/switch/czlonkowie.jpg"
          alt="Zdjęcie zespołu Ferajna z Hoovera"
          //className={styles.image}
          className={styles.rightImage}
          id="rightImage"
          onMouseEnter={() => {
            document.getElementById("rightTitle").classList.add(`${styles.titleActive}`);
            //document.getElementById("rightTitle").className = `${styles.title} ${styles.titleActive}`;
          }}
          onMouseLeave={() => {
            props.active !== "right" &&
              document.getElementById("rightTitle").classList.remove(`${styles.titleActive}`);

            // (props.active === "right" &&
            //   (document.getElementById("rightTitle").className = `${styles.title} ${styles.titleActive}`)) ||
            //   (document.getElementById("rightTitle").className = `${styles.title}`);
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
