import Media from "react-media";
import ReactPlayer from "react-player/youtube";
import { breakpoints } from "../../assets/breakpoints";
import styles from "./MusicPage.module.scss";

const MusicPage = () => (
  <section className={styles.music}>
    <div className={styles.container}>
      <div className={styles.grid}>
        <Media queries={breakpoints}>
          {(matches) => (
            <>
              {/* MOBILE LAYOUT */}

              {matches.mobile && (
                <>
                  <div className={styles.gridItem}>
                    <h3 className={styles.header}>Nasza płyta</h3>
                    <p className={styles.text}>
                      Prezentujemy naszą płytę z piosenkami powstańczymi i innymi utworami, wydaną
                      razem z pięknie ilustrowanym śpiewnikiem. Zawiera on dwadzieścia piosenek z
                      historii Polski, z zapisem linii melodycznej i opisem ich powstania. Zestaw
                      jest dostępny w sklepie internetowym wydawnictwa{" "}
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
                  <div className={styles.gridItem}>
                    <img
                      className={styles.image}
                      src="/images/plyta.jpg"
                      alt="Okładka płyty Kto się tak wydziera?"
                    />
                  </div>

                  <div className={styles.gridSpacer}>
                    <img src="../images/loader.png" className={styles.spacer} alt="spacer" />
                  </div>

                  <div className={styles.gridItem}>
                    <h3 className={styles.header}>&quot;Warszawo ma&quot;</h3>
                    <p className={styles.text}>
                      Serdecznie zapraszamy do obejrzenia teledysku do naszego wykonania utworu
                      &quot;Warszawo ma&quot;, który powstał dzięki pracy warszawskiej młodzieży
                      latem 2015 roku. Projekt był koordynowany przez Jędrzeja Gorskiego, Jeremiego
                      Skrodzkiego i Mateusza Wyszogrodzkiego.
                    </p>
                  </div>
                  <div className={styles.gridItem}>
                    <ReactPlayer
                      url="https://www.youtube-nocookie.com/embed/PbWtu5Sa_NE"
                      controls
                      className={styles.video}
                      width="100%"
                      height="auto"
                    />
                  </div>

                  <div className={styles.gridSpacer}>
                    <img src="../images/loader.png" className={styles.spacer} alt="spacer" />
                  </div>

                  <div className={styles.gridItem}>
                    <h3 className={styles.header}>Filmy edukacyjne</h3>
                    <p className={styles.text}>
                      Dzięki współpracy z{" "}
                      <a
                        href="https://www.orpeg.pl/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontWeight: "bold" }}
                      >
                        ORPEG
                      </a>{" "}
                      stworzyliśmy dwa filmy edukacyjne na temat polskich pieśni patriotycznych.
                      Obie produkcje są dostępne bezpłatnie na YouTube i są popularne wśród uczniów
                      podczas lekcji historii i muzyki. Za zdjęcia i montaż odpowiadała firma{" "}
                      <a
                        href="https://www.facebook.com/FBWorksVideo/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontWeight: "bold" }}
                      >
                        F&B Works
                      </a>
                      , my zajęliśmy się oprawą muzyczną, a eksperci dostarczyli cenne treści
                      merytoryczne. Zachęcamy do ich oglądania i udostępniania!
                    </p>
                  </div>
                  <div className={styles.gridItem}>
                    <ReactPlayer
                      url="https://www.youtube-nocookie.com/embed/-2klUYihhJo"
                      controls
                      className={styles.video}
                      width="100%"
                      height="auto"
                    />
                    <ReactPlayer
                      url="https://www.youtube-nocookie.com/embed/zyE7tw4JvvY"
                      controls
                      className={styles.video}
                      width="100%"
                      height="auto"
                    />
                  </div>
                </>
              )}

              {/* TABLET & DESKTOP LAYOUT */}

              {(matches.tablet || matches.desktop) && (
                <>
                  <div className={styles.gridItem}>
                    <img
                      className={styles.image}
                      src="/images/plyta.jpg"
                      alt="Okładka płyty Kto się tak wydziera?"
                    />
                  </div>
                  <div className={styles.gridItem}>
                    <h3 className={styles.header}>Nasza płyta</h3>
                    <p className={styles.text}>
                      Prezentujemy naszą płytę z piosenkami powstańczymi i innymi utworami, wydaną
                      razem z pięknie ilustrowanym śpiewnikiem. Zawiera on dwadzieścia piosenek z
                      historii Polski, z zapisem linii melodycznej i opisem ich powstania. Zestaw
                      jest dostępny w sklepie internetowym wydawnictwa{" "}
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
                    <img src="../images/loader.png" className={styles.spacer} alt="spacer" />
                  </div>

                  <div className={styles.gridItem}>
                    <h3 className={styles.header}>&quot;Warszawo ma&quot;</h3>
                    <p className={styles.text}>
                      Serdecznie zapraszamy do obejrzenia teledysku do naszego wykonania utworu
                      &quot;Warszawo ma&quot;, który powstał dzięki pracy warszawskiej młodzieży
                      latem 2015 roku. Projekt był koordynowany przez Jędrzeja Gorskiego, Jeremiego
                      Skrodzkiego i Mateusza Wyszogrodzkiego.
                    </p>
                  </div>
                  <div className={styles.gridItem}>
                    <ReactPlayer
                      url="https://www.youtube-nocookie.com/embed/PbWtu5Sa_NE"
                      controls
                      className={styles.video}
                      width="100%"
                      height="auto"
                    />
                  </div>

                  <div className={styles.gridSpacer}>
                    <img src="../images/loader.png" className={styles.spacer} alt="spacer" />
                  </div>

                  <div className={styles.gridItem}>
                    <ReactPlayer
                      url="https://www.youtube-nocookie.com/embed/-2klUYihhJo"
                      controls
                      className={styles.video}
                      width="100%"
                      height="auto"
                    />
                    <ReactPlayer
                      url="https://www.youtube-nocookie.com/embed/zyE7tw4JvvY"
                      controls
                      className={styles.video}
                      width="100%"
                      height="auto"
                    />
                  </div>

                  <div className={styles.gridItem}>
                    <h3 className={styles.header}>Filmy edukacyjne</h3>
                    <p className={styles.text}>
                      Dzięki współpracy z{" "}
                      <a
                        href="https://www.orpeg.pl/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontWeight: "bold" }}
                      >
                        ORPEG
                      </a>{" "}
                      stworzyliśmy dwa filmy edukacyjne na temat polskich pieśni patriotycznych.
                      Obie produkcje są dostępne bezpłatnie na YouTube i są popularne wśród uczniów
                      podczas lekcji historii i muzyki. Za zdjęcia i montaż odpowiadała firma{" "}
                      <a
                        href="https://www.facebook.com/FBWorksVideo/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontWeight: "bold" }}
                      >
                        F&B Works
                      </a>
                      , my zajęliśmy się oprawą muzyczną, a eksperci dostarczyli cenne treści
                      merytoryczne. Zachęcamy do ich oglądania i udostępniania!
                    </p>
                  </div>
                </>
              )}
            </>
          )}
        </Media>
      </div>
    </div>
  </section>
);

export default MusicPage;
