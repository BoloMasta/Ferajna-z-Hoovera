import Media from "react-media";
import { breakpoints } from "../../assets/breakpoints";
import styles from "./MusicPage.module.scss";

const MusicPage = () => {
  return (
    <section className={styles.music}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <Media queries={breakpoints}>
            {(matches) => (
              <>
                {/* ===== MOBILE ===== */}

                {matches.mobile && <></>}

                {/* ===== TABLET ===== */}

                {matches.tablet && <></>}

                {/* ===== DESKTOP ===== */}

                {matches.desktop && <></>}
              </>
            )}
          </Media>

          <div className={styles.gridItem}>
            <Media queries={breakpoints}>
              {(matches) =>
                matches.desktop ? (
                  <img
                    className={styles.image}
                    src="/images/plyta.jpg"
                    alt="Okładka płyty Kto się tak wydziera?"
                    onClick={() => {
                      window.open(
                        "https://wydawnictwopoczekalnia.pl/pl/p/Kto-sie-tak-wydziera/24",
                        "_blank"
                      );
                    }}
                  />
                ) : (
                  <img
                    className={styles.image}
                    src="/images/plyta.jpg"
                    alt="Okładka płyty Kto się tak wydziera?"
                  />
                )
              }
            </Media>
          </div>
          <div className={styles.gridItem}>
            <h3 className={`${styles.header} ${styles.headerRight}`}>Nasza płyta</h3>
            <p className={styles.text}>
              Trochę trzeba było zaczekać, ale mamy nadzieję, że było warto. W końcu jest! Nasza
              płyta z piosenkami powstańczymi, ale nie tylko. Do nabycia w sklepie internetowym
              wydawnictwa{" "}
              <a
                href="https://wydawnictwopoczekalnia.pl/pl/p/Kto-sie-tak-wydziera/24"
                target="_blank"
                rel="noreferrer"
                style={{ fontWeight: "bold" }}
              >
                Poczekalnia.
              </a>
            </p>
          </div>

          <div className={styles.gridSpacer}>
            <img src="../images/loader.png" className={styles.spacer} />
          </div>

          <div className={styles.gridItem}>
            <h3 className={`${styles.header} ${styles.headerLeft}`}> &quot;Warszawo ma&quot;</h3>
            <p className={styles.text}>
              Serdecznie zapraszamy do obejrzenia teledysku do naszego nagrania utworu
              &quot;Warszawo ma&quot;, który został zrealizowany przez warszawską młodzież w wakacje
              2015 roku. Koordynację tego projektu zapewnili Jędrzej Gorski, Jeremi Skrodzki i
              Mateusz Wyszogrodzki.
            </p>
          </div>
          <div className={styles.gridItem}>
            <iframe
              className={styles.video}
              src="https://www.youtube-nocookie.com/embed/PbWtu5Sa_NE"
              title="Ferajna z Hoovera - Warszawo ma"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className={styles.gridSpacer}>
            <img src="../images/loader.png" className={styles.spacer} />
          </div>

          <Media queries={breakpoints}>
            {(matches) =>
              !matches.mobile ? (
                <>
                  <div className={styles.gridItem}>
                    <iframe
                      className={styles.video}
                      src="https://www.youtube-nocookie.com/embed/-2klUYihhJo"
                      title="Piosenki Powstania Warszawskiego"
                      frameBorder="0"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>

                    <iframe
                      className={styles.video}
                      style={{ marginTop: "20px" }}
                      src="https://www.youtube-nocookie.com/embed/zyE7tw4JvvY"
                      title="Piosenki i pieńni patriotyczne"
                      frameBorder="0"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className={styles.gridItem}>
                    <h3 className={`${styles.header} ${styles.headerRight}`}>Filmy edukacyjne</h3>
                    <p className={styles.text}>
                      Dzięki współpracy z{" "}
                      <a
                        href="https://www.orpeg.pl/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontWeight: "bold" }}
                      >
                        ORPEG
                      </a>
                      , udało nam się stworzyć już 2 filmy edukacyjne na temat polskich pieśni
                      patriotycznych. Obie produkcje są dostępne bezpłatnie na platformie YouTube i
                      cieszą się popularnością podczas lekcji historii i muzyki. Za zdjęcia i montaż
                      obu filmów odpowiedzialna była firma{" "}
                      <a
                        href="https://www.facebook.com/FBWorksVideo/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontWeight: "bold" }}
                      >
                        F&B Works
                      </a>
                      , natomiast my zajęliśmy się oprawą muzyczną, a eksperci dostarczyli cenne
                      treści merytoryczne. Serdecznie zachęcamy do ich oglądania i udostępniania!
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.gridItem}>
                    <h3 className={`${styles.header} ${styles.headerRight}`}>Filmy edukacyjne</h3>
                    <p className={styles.text}>
                      Dzięki współpracy z{" "}
                      <a
                        href="https://www.orpeg.pl/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontWeight: "bold" }}
                      >
                        ORPEG
                      </a>
                      , udało nam się stworzyć już 2 filmy edukacyjne na temat polskich pieśni
                      patriotycznych. Obie produkcje są dostępne bezpłatnie na platformie YouTube i
                      cieszą się popularnością podczas lekcji historii i muzyki. Za zdjęcia i montaż
                      obu filmów odpowiedzialna była firma{" "}
                      <a
                        href="https://www.facebook.com/FBWorksVideo/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontWeight: "bold" }}
                      >
                        F&B Works
                      </a>
                      , natomiast my zajęliśmy się oprawą muzyczną, a eksperci dostarczyli cenne
                      treści merytoryczne. Serdecznie zachęcamy do ich oglądania i udostępniania!
                    </p>
                  </div>
                  <div className={styles.gridItem}>
                    <iframe
                      className={styles.video}
                      src="https://www.youtube-nocookie.com/embed/-2klUYihhJo"
                      title="Piosenki Powstania Warszawskiego"
                      frameBorder="0"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>

                    <iframe
                      className={styles.video}
                      style={{ marginTop: "20px" }}
                      src="https://www.youtube-nocookie.com/embed/zyE7tw4JvvY"
                      title="Piosenki i pieńni patriotyczne"
                      frameBorder="0"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </>
              )
            }
          </Media>
        </div>
      </div>
    </section>
  );
};

export default MusicPage;
