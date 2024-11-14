import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import Media from "react-media";
import { breakpoints } from "../../assets/breakpoints";
import styles from "./Teaser.module.scss";

const Teaser = () => {
  const smoothScrollToTop = () => {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothScrollToTop);
      window.scrollTo(0, currentScroll - currentScroll / 8);
    }
  };

  return (
    <section className={styles.teaser}>
      <div className={styles.container}>
        <Media queries={breakpoints}>
          {(matches) =>
            matches.mobile ? (
              <>
                <img
                  src="../images/teaser/kto.png"
                  loading="lazy"
                  alt="Kto się tak wydziera?"
                  className={styles.kto}
                />
                <img
                  src="../images/teaser/ferajna.png"
                  loading="lazy"
                  alt="Ferajna z Hoovera"
                  className={styles.ferajna}
                />
                <p className={styles.text}>
                  Witamy na stronie naszego zespołu. Znajdziesz tu informacje o nas, naszej
                  twórczości oraz o tym jak się z nami skontaktować.
                </p>
              </>
            ) : (
              <>
                <Parallax
                  translateY={[-120, 0]}
                  opacity={[0.5, 1]}
                  startScroll={100}
                  endScroll={500}
                >
                  <img
                    src="../images/teaser/kto.png"
                    loading="lazy"
                    alt="Kto się tak wydziera?"
                    className={styles.kto}
                  />
                </Parallax>

                <Parallax
                  opacity={[0.2, 1]}
                  scale={[0.2, 1]}
                  translateX={[50, 0]}
                  startScroll={100}
                  endScroll={500}
                  id="ferajna"
                >
                  <img
                    src="../images/teaser/ferajna.png"
                    loading="lazy"
                    alt="Ferajna z Hoovera"
                    className={styles.ferajna}
                  />
                </Parallax>

                <Parallax opacity={[0.5, 1]}>
                  <p className={styles.text}>
                    Witamy na stronie naszego zespołu. Znajdziesz tu informacje o nas, naszej
                    twórczości oraz o tym jak się z nami skontaktować.
                  </p>
                </Parallax>
              </>
            )
          }
        </Media>

        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <Link to="/onas" onClick={smoothScrollToTop}>
              <picture>
                <source media={breakpoints.mobile} srcSet="../images/teaser/teaser1_mobile.jpg" />
                <source media={breakpoints.tablet} srcSet="../images/teaser/teaser1.jpg" />
                <img
                  src="../images/teaser/teaser1.jpg"
                  alt="Ferajna z Hoovera"
                  className={styles.image}
                  loading="lazy"
                />
              </picture>
              <p className={styles.description}>Dowiedz się kim jesteśmy</p>
            </Link>
          </div>

          <div className={styles.gridItem}>
            <Link to="/muzyka" onClick={smoothScrollToTop}>
              <picture>
                <source media={breakpoints.mobile} srcSet="../images/teaser/teaser2_mobile.jpg" />
                <source media={breakpoints.tablet} srcSet="../images/teaser/teaser2.jpg" />
                <img
                  src="../images/teaser/teaser2.jpg"
                  alt="Ferajna z Hoovera"
                  className={styles.image}
                  loading="lazy"
                />
              </picture>
              <p className={styles.description}>Posłuchaj co gramy</p>
            </Link>
          </div>

          <div className={styles.gridItem}>
            <Link to="/kontakt" onClick={smoothScrollToTop}>
              <picture>
                <source media={breakpoints.mobile} srcSet="../images/teaser/teaser3_mobile.jpg" />
                <source media={breakpoints.tablet} srcSet="../images/teaser/teaser3.jpg" />
                <img
                  src="../images/teaser/teaser3.jpg"
                  alt="Ferajna z Hoovera"
                  className={styles.image}
                  loading="lazy"
                />
              </picture>
              <p className={styles.description}>Skontaktuj się z nami</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaser;
