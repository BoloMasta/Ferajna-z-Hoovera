import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import styles from "./Teaser.module.scss";

const Teaser = () => {
  return (
    <section className={styles.teaser}>
      <div className={styles.container}>
        <Parallax speed={-50} translateY={[-200, 0]}>
          <h2 className={styles.title}>Kto się tak wydziera?</h2>
        </Parallax>

        <Parallax
          translateX={["-30px", "600px"]}
          translateY={["0px", "-40px"]}
          scale={[1, 0.75]}
          rotate={[-10, 180]}
          easing="easeInQuad"
          opacity={[1, 0]}
        >
          <img src="../images/loader.png" alt="Ferajna z Hoovera" className={styles.logo} loading="lazy" />
        </Parallax>

        <Parallax speed={-50} translateY={[50, 0]}>
          <p className={styles.text}>
            Witamy na stronie naszego zespołu. Znajdziesz tu informacje o nas, naszej twórczości oraz o tym jak się z
            nami skontaktować. Zapraszamy do zapoznania się z naszymi wykonaniami oraz do kontaktu w sprawie
            ewentualnych propozycji koncertowych.
          </p>
        </Parallax>

        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              <img src="../images/teaser1.jpg" alt="Ferajna z Hoovera" className={styles.image} loading="lazy" />
              <p className={styles.description}>Dowiedz się kim jesteśmy</p>
            </Link>
          </div>

          <div className={styles.gridItem}>
            <Link to="/music" onClick={() => window.scrollTo(0, 0)}>
              <img src="../images/teaser2.jpg" alt="Ferajna z Hoovera" className={styles.image} loading="lazy" />
              <p className={styles.description}>Posłuchaj co gramy</p>
            </Link>
          </div>

          <div className={styles.gridItem}>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <img src="../images/teaser3.jpg" alt="Ferajna z Hoovera" className={styles.image} loading="lazy" />
              <p className={styles.description}>Skontaktuj się z nami</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaser;
