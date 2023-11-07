import { useEffect } from "react";
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

  // let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  // let isDisabled = false;

  // const OutputScrollToConsole = () => {
  //   currentScroll = document.documentElement.scrollTop;
  //   if (currentScroll >= 500) {
  //     console.log("Wyłączam parallax");
  //     isDisabled = true;
  //     console.log(isDisabled);
  //     // document.querySelector("#ferajna").setAttribute("disabled", "");
  //     //document.querySelector("#ferajna").removeEventListener("scroll", OutputScrollToConsole);
  //     //document.querySelector("#ferajna").removeAttribute("disabled");
  //   }
  //   console.log(currentScroll);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", OutputScrollToConsole);
  //   //return () => window.removeEventListener("scroll", OutputScrollToConsole);
  // }, []);

  return (
    <section className={styles.teaser}>
      <div className={styles.container}>
        <Media queries={breakpoints}>
          {(matches) =>
            matches.mobile ? (
              <>
                <img
                  src="../images/kto.png"
                  loading="lazy"
                  alt="Kto się tak wydziera?"
                  className={styles.kto}
                />
                <img
                  src="../images/ferajna.png"
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
                  startScroll={100}
                  endScroll={500}
                  id="ferajna"
                  // disabled
                  // onProgressChange={(progress) => {
                  //   if (progress > 0.9) {
                  //     console.log("Wyłączam parallax");
                  //     document.querySelector("#ferajna").setAttribute("disabled", "");
                  //     // document.querySelector("#ferajna").removeEventListener("scroll", OutputScrollToConsole);
                  //     // document.querySelector("#ferajna").removeAttribute("disabled");
                  //   }
                  // }}
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
            <Link to="/about" onClick={smoothScrollToTop}>
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
            <Link to="/music" onClick={smoothScrollToTop}>
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
            <Link to="/contact" onClick={smoothScrollToTop}>
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
