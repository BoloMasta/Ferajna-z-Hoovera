import Media from "react-media";
import { Img } from "react-image";
import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";
import Loader from "../../layouts/Loader/Loader";
import NoPhoto from "../../../public/images/brak-zdjecia.png";
import { breakpoints } from "../../assets/breakpoints";
import styles from "./About.module.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";

const AboutText = ({ children }) => <p className={styles.text}>{children}</p>;

const AboutImage = ({ src, extraClass = "" }) => (
  <Img
    src={src}
    alt="Ferajna z Hoovera"
    className={`${styles.image} ${extraClass}`}
    loading="lazy"
    loader={<Loader />}
    unloader={<img src={NoPhoto} alt="Brak zdjęcia" className={styles.image} />}
  />
);

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>Warszawiacy, patrioci, a przede wszystkim przyjaciele!</h2>
      <div className={styles.grid}>
        <Media queries={breakpoints}>
          {(matches) => (
            <>
              {/* ===== MOBILE ===== */}

              {matches.mobile && (
                <>
                  <div className={styles.gridItem}>
                    <AboutText>
                      Jesteśmy grupą znajomych praktycznie od dzieciństwa. Kilka lat temu
                      spontanicznie połączyliśmy nasze muzyczne talenty i w pewne sierpniowe
                      popołudnie zaczęliśmy grać piosenki powstańcze, które znaliśmy m.in. z
                      harcerstwa. Naszym celem było oddanie hołdu powstańcom i zaprezentowanie ich
                      repertuaru wszystkim warszawiakom.
                    </AboutText>
                    <AboutText>
                      Ciepłe przyjęcie przez publiczność sprawiło, że gramy do dziś, przybliżając
                      naszym słuchaczom nie tylko piosenki powstańcze, ale także utwory legionów
                      oraz inne znane melodie patriotyczne. W okresie świąt Bożego Narodzenia
                      wykonujemy również kolędy.
                    </AboutText>
                  </div>
                  <div className={styles.gridItem}>
                    <ImageGallery
                      items={[
                        {
                          original: "../images/about/about/skwer1.jpg",
                        },
                        {
                          original: "../images/about/about/skwer3.jpg",
                        },
                        {
                          original: "../images/about/about/IMG_2636.jpg",
                        },
                      ]}
                      showBullets
                      lazyLoad={true}
                      additionalClass={styles.image}
                      showPlayButton={false}
                      showFullscreenButton={false}
                      showNav={false}
                    />
                  </div>
                  <div className={styles.gridItem}>
                    <AboutText>
                      Okrzyknęliśmy się Ferajną z Hoovera, gdyż to właśnie na skwerze Hoovera przy
                      Krakowskim Przedmieściu w Warszawie już od kilku lat można nas spotkać podczas
                      najważniejszych rocznic państwowych, świąt i ważnych dni w historii naszego
                      miasta i kraju.
                    </AboutText>
                    <AboutText>
                      Jako zespół nie tylko spontanicznie występujemy na ulicy, ale także angażujemy
                      się w pomoc warszawskim powstańcom. Spotykamy się z nimi na różnych
                      wydarzeniach lub odwiedzamy ich z okazji urodzin, przynosząc muzyczną laurkę.
                    </AboutText>
                  </div>
                  <div className={styles.gridItem}>
                    <AboutImage src="../images/about/about/fot. Stefan Różycki 2.jpg" />
                  </div>
                  <div className={styles.gridItem}>
                    <AboutText>
                      Kiedy pozwalają na to nasze pozamuzyczne obowiązki, koncertujemy także w
                      innych miastach Polski. Można nas spotkać na różnych piknikach historycznych,
                      na ulicach, w szkołach i kościołach. Kilka razy mieliśmy przyjemność
                      występować na Festiwalu Niepodległa na Krakowskim Przedmieściu oraz na
                      Festiwalu Dziękujemy Polsko.
                    </AboutText>
                    <AboutText>
                      W 2020 roku otrzymaliśmy srebrną statuetkę na gali BohaterON za całokształt
                      naszych dotychczasowych działań oraz aktywny udział w akcjach na rzecz
                      kombatantów.
                    </AboutText>
                  </div>
                  <div className={styles.gridItem}>
                    <AboutImage src="../images/about/about/bohateron.jpg" />
                  </div>
                </>
              )}

              {/* ===== TABLET ===== */}

              {matches.tablet && (
                <>
                  <div className={styles.gridItem}>
                    <AboutText>
                      Jesteśmy grupą znajomych praktycznie od dzieciństwa. Kilka lat temu
                      spontanicznie połączyliśmy nasze muzyczne talenty i w pewne sierpniowe
                      popołudnie zaczęliśmy grać piosenki powstańcze, które znaliśmy m.in. z
                      harcerstwa. Naszym celem było oddanie hołdu powstańcom i zaprezentowanie ich
                      repertuaru wszystkim warszawiakom.
                    </AboutText>
                    <AboutText>
                      Ciepłe przyjęcie przez publiczność sprawiło, że gramy do dziś, przybliżając
                      naszym słuchaczom nie tylko piosenki powstańcze, ale także utwory legionów
                      oraz inne znane melodie patriotyczne. W okresie świąt Bożego Narodzenia
                      wykonujemy również kolędy.
                    </AboutText>
                    <AboutText>
                      Okrzyknęliśmy się Ferajną z Hoovera, gdyż to właśnie na skwerze Hoovera przy
                      Krakowskim Przedmieściu w Warszawie już od kilku lat można nas spotkać podczas
                      najważniejszych rocznic państwowych, świąt i ważnych dni w historii naszego
                      miasta i kraju.
                    </AboutText>
                  </div>
                  <div className={styles.gridItem}>
                    <AboutImage
                      src="../images/about/about/skwer1.jpg"
                      extraClass={styles.imageLeft}
                    />
                    <AboutImage
                      src="../images/about/about/skwer3.jpg"
                      extraClass={styles.imageRight}
                    />
                    <AboutImage
                      src="../images/about/about/fot. Stefan Różycki 2.jpg"
                      extraClass={styles.imageLeft}
                    />
                  </div>
                  <div className={styles.gridItem}>
                    <AboutImage
                      src="../images/about/about/skwer4.jpg"
                      extraClass={styles.imageRight}
                    />
                    <AboutImage
                      src="../images/about/about/bohateron.jpg"
                      extraClass={styles.imageLeft}
                    />
                    <AboutImage
                      src="../images/about/about/IMG_2636.jpg"
                      extraClass={styles.imageRight}
                    />
                  </div>
                  <div className={styles.gridItem}>
                    <AboutText>
                      Jako zespół nie tylko spontanicznie występujemy na ulicy, ale także angażujemy
                      się w pomoc warszawskim powstańcom. Spotykamy się z nimi na różnych
                      wydarzeniach lub odwiedzamy ich z okazji urodzin, przynosząc muzyczną laurkę.
                    </AboutText>
                    <AboutText>
                      Kiedy pozwalają na to nasze pozamuzyczne obowiązki, koncertujemy także w
                      innych miastach Polski. Można nas spotkać na różnych piknikach historycznych,
                      na ulicach, w szkołach i kościołach. Kilka razy mieliśmy przyjemność
                      występować na Festiwalu Niepodległa na Krakowskim Przedmieściu oraz na
                      Festiwalu Dziękujemy Polsko.
                    </AboutText>
                    <AboutText>
                      W 2020 roku otrzymaliśmy srebrną statuetkę na gali BohaterON za całokształt
                      naszych dotychczasowych działań oraz aktywny udział w akcjach na rzecz
                      kombatantów.
                    </AboutText>
                  </div>
                </>
              )}

              {/* ===== DESKTOP ===== */}

              {matches.desktop && (
                <>
                  <div className={styles.gridItem}>
                    <AboutText>
                      Jesteśmy grupą znajomych praktycznie od dzieciństwa. Kilka lat temu
                      spontanicznie połączyliśmy nasze muzyczne talenty i w pewne sierpniowe
                      popołudnie zaczęliśmy grać piosenki powstańcze, które znaliśmy m.in. z
                      harcerstwa. Naszym celem było oddanie hołdu powstańcom i zaprezentowanie ich
                      repertuaru wszystkim warszawiakom.
                    </AboutText>
                    <AboutText>
                      Ciepłe przyjęcie przez publiczność sprawiło, że gramy do dziś, przybliżając
                      naszym słuchaczom nie tylko piosenki powstańcze, ale także utwory legionów
                      oraz inne znane melodie patriotyczne. W okresie świąt Bożego Narodzenia
                      wykonujemy również kolędy.
                    </AboutText>
                    <AboutText>
                      Okrzyknęliśmy się Ferajną z Hoovera, gdyż to właśnie na skwerze Hoovera przy
                      Krakowskim Przedmieściu w Warszawie już od kilku lat można nas spotkać podczas
                      najważniejszych rocznic państwowych, świąt i ważnych dni w historii naszego
                      miasta i kraju.
                    </AboutText>
                  </div>
                  <div className={styles.gridItem}>
                    <AboutImage
                      src="../images/about/about/skwer1.jpg"
                      extraClass={styles.imageLeft}
                    />
                    <AboutImage
                      src="../images/about/about/skwer3.jpg"
                      extraClass={styles.imageRight}
                    />
                  </div>
                  <div className={styles.gridItem}>
                    <AboutImage
                      src="../images/about/about/skwer4.jpg"
                      extraClass={styles.imageRight}
                    />
                    <AboutImage
                      src="../images/about/about/bohateron.jpg"
                      extraClass={styles.imageLeft}
                    />
                  </div>
                  <div className={styles.gridItem}>
                    <AboutText>
                      Jako zespół nie tylko spontanicznie występujemy na ulicy, ale także angażujemy
                      się w pomoc warszawskim powstańcom. Spotykamy się z nimi na różnych
                      wydarzeniach lub odwiedzamy ich z okazji urodzin, przynosząc muzyczną laurkę.
                    </AboutText>
                    <AboutText>
                      Kiedy pozwalają na to nasze pozamuzyczne obowiązki, koncertujemy także w
                      innych miastach Polski. Można nas spotkać na różnych piknikach historycznych,
                      na ulicach, w szkołach i kościołach. Kilka razy mieliśmy przyjemność
                      występować na Festiwalu Niepodległa na Krakowskim Przedmieściu oraz na
                      Festiwalu Dziękujemy Polsko.
                    </AboutText>
                    <AboutText>
                      W 2020 roku otrzymaliśmy srebrną statuetkę na gali BohaterON za całokształt
                      naszych dotychczasowych działań oraz aktywny udział w akcjach na rzecz
                      kombatantów.
                    </AboutText>
                  </div>
                </>
              )}
            </>
          )}
        </Media>
      </div>
    </section>
  );
};

AboutText.propTypes = {
  children: PropTypes.string,
};

AboutImage.propTypes = {
  src: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
};

export default About;
