import propTypes from "prop-types";
import styles from "./Switch.module.scss";

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
  } else if (props.active === "right") {
    leftTitle.classList.remove(`${styles.titleActive}`);
    rightTitle.classList.add(`${styles.titleActive}`);

    if (leftImage) leftImage.classList.remove(`${styles.imageActive}`);
    if (rightImage) rightImage.classList.add(`${styles.imageActive}`);
  }

  const scrollToDown = () => {
    setTimeout(() => {
      if (window.innerWidth < 768) {
        window.scrollTo({
          top: 280,
          behavior: "smooth",
        });
      } else if (window.innerWidth < 1280) {
        window.scrollTo({
          top: 465,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 550,
          behavior: "smooth",
        });
      }
    }, 0);
  };

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
          }}
          onMouseLeave={() => {
            props.active !== "left" &&
              document.getElementById("leftTitle").classList.remove(`${styles.titleActive}`);
          }}
          onClick={() => {
            props.setActive("left");
            scrollToDown();
          }}
        />
        <img
          src="../images/about/switch/czlonkowie.jpg"
          alt="Zdjęcie zespołu Ferajna z Hoovera"
          className={styles.rightImage}
          id="rightImage"
          onMouseEnter={() => {
            document.getElementById("rightTitle").classList.add(`${styles.titleActive}`);
          }}
          onMouseLeave={() => {
            props.active !== "right" &&
              document.getElementById("rightTitle").classList.remove(`${styles.titleActive}`);
          }}
          onClick={() => {
            props.setActive("right");
            scrollToDown();
          }}
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
