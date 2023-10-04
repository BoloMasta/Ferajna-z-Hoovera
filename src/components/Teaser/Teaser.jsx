import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import styles from "./Teaser.module.scss";

const Teaser = () => {
  return (
    <section className={styles.teaser}>
      <div className={styles.container}>
        <Parallax translateY={[-120, 0]} opacity={[0.5, 1]} startScroll={100} endScroll={500}>
          <img
            src="../images/kto.png"
            loading="lazy"
            alt="Kto się tak wydziera?"
            className={styles.kto}
          />
          {/* <h2 className={styles.title}>Kto się tak wydziera?</h2> */}
        </Parallax>

        <Parallax
          opacity={[0.2, 1]}
          scale={[0.2, 1]}
          translateX={[50, 0]}
          startScroll={200}
          endScroll={500}
        >
          <img
            src="../images/ferajna.png"
            loading="lazy"
            alt="Ferajna z Hoovera"
            className={styles.ferajna}
          />
          {/* <h2 className={styles.title}>Kto się tak wydziera?</h2> */}
        </Parallax>

        {/* <Parallax
          translateX={["-30px", "600px"]}
          translateY={["0px", "-40px"]}
          scale={[1, 0.75]}
          rotate={[-10, 180]}
          easing="easeInQuad"
          opacity={[1, 0]}
        >
          <img src="../images/loader.png" alt="Ferajna z Hoovera" className={styles.logo} loading="lazy" />
        </Parallax> */}

        <Parallax opacity={[0.5, 1]}>
          <p className={styles.text}>
            Witamy na stronie naszego zespołu. Znajdziesz tu informacje o nas, naszej twórczości
            oraz o tym jak się z nami skontaktować.
          </p>
        </Parallax>

        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
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
            <Link to="/music" onClick={() => window.scrollTo(0, 0)}>
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
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
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
      </div>
    </section>
  );
};

export default Teaser;
