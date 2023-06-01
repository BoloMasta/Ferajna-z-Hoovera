import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import styles from "./Teaser.module.scss";

const Teaser = () => {
  return (
    <section className={styles.teaser}>
      <div className={styles.container}>
        <Parallax speed={-50} translateY={[-250, -20]}>
          <h2 className={styles.title}>Kto się tak wydziera?</h2>
        </Parallax>

        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <Link to="/about">
              <img
                src="../images/teaser1.jpg"
                alt="Ferajna z Hoovera"
                className={styles.image}
                loading="lazy"
              />
              <p className={styles.description}>Dowiedz się kim jesteśmy</p>
            </Link>
          </div>

          <div className={styles.gridItem}>
            <Link to="/music">
              <img
                src="../images/teaser2.jpg"
                alt="Ferajna z Hoovera"
                className={styles.image}
                loading="lazy"
              />
              <p className={styles.description}>Posłuchaj co gramy</p>
            </Link>
          </div>

          <div className={styles.gridItem}>
            <Link to="/contact">
              <img
                src="../images/teaser3.jpg"
                alt="Ferajna z Hoovera"
                className={styles.image}
                loading="lazy"
              />
              <p className={styles.description}>Skontaktuj się z nami</p>
            </Link>
          </div>
        </div>

        {/* <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/about">
              <img
                src="../images/teaser1.jpg"
                alt="Ferajna z Hoovera"
                className={styles.image}
                loading="lazy"
              />
              <p className={styles.description}>Dowiedz się kim jesteśmy</p>
            </Link>
          </li>

          <li className={styles.item}>
            <Link to="/music">
              <img
                src="../images/teaser2.jpg"
                alt="Ferajna z Hoovera"
                className={styles.image}
                loading="lazy"
              />
              <p className={styles.description}>Posłuchaj co gramy</p>
            </Link>
          </li>

          <li className={styles.item}>
            <Link to="/contact">
              <img
                src="../images/teaser3.jpg"
                alt="Ferajna z Hoovera"
                className={styles.image}
                loading="lazy"
              />
              <p className={styles.description}>Skontaktuj się z nami</p>
            </Link>
          </li>
        </ul> */}
      </div>
    </section>
  );
};

export default Teaser;
