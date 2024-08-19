import { Parallax } from "react-scroll-parallax";
import Media from "react-media";
import { breakpoints } from "../../assets/breakpoints";
import styles from "./Quote.module.scss";

const Quote = () => {
  return (
    <Media queries={breakpoints}>
      {(matches) =>
        matches.mobile ? (
          <section className={styles.quote}>
            <div className={styles.box}>
              <i className={`${styles.fas} ${styles.fa1}`}></i>
              <div className={styles.text}>
                <i className={`${styles.fas} ${styles.fa1}`}></i>
                <div>
                  <p>
                    Żyć to działać, to rozsiewać po świecie talent, energię, uczucie, pomagać w
                    czasie teraźniejszym pokoleniom przyszłym. — Władysław Reymont
                  </p>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <Parallax
            opacity={[0.5, 1]}
            scale={[0.6, 1]}
            translateY={[50, 0]}
            startScroll={matches.tablet ? 900 : 1100}
            endScroll={matches.tablet ? 1200 : 1500}
          >
            <section className={styles.quote}>
              <div className={styles.box}>
                <i className={`${styles.fas} ${styles.fa1}`}></i>
                <div className={styles.text}>
                  <i className={`${styles.fas} ${styles.fa1}`}></i>
                  <div>
                    <p>
                      Żyć to działać, to rozsiewać po świecie talent, energię, uczucie, pomagać w
                      czasie teraźniejszym pokoleniom przyszłym. — Władysław Reymont
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Parallax>
        )
      }
    </Media>
  );
};

export default Quote;
