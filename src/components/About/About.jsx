import Media from "react-media";
import { Img } from "react-image";
import Loader from "../../layouts/Loader/Loader";
import NoPhoto from "../../../public/images/brak-zdjecia.png";
import { breakpoints } from "../../assets/breakpoints";
import styles from "./About.module.scss";

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
                    <p className={styles.text}>
                      Jesteśmy grupą znajomych praktycznie od dzieciństwa. Kilka lat temu
                      spontanicznie połączyliśmy nasze muzyczne talenty i w pewne sierpniowe
                      popołudnie zaczęliśmy grać piosenki powstańcze, które znaliśmy m.in. z
                      harcerstwa. Naszym celem było oddanie hołdu powstańcom i zaprezentowanie ich
                      repertuaru wszystkim warszawiakom.
                    </p>
                    <p className={styles.text}>
                      Ciepłe przyjęcie przez publiczność sprawiło, że gramy do dziś, przybliżając
                      naszym słuchaczom nie tylko piosenki powstańcze, ale także utwory legionów
                      oraz inne znane melodie patriotyczne. W okresie świąt Bożego Narodzenia
                      wykonujemy również kolędy.
                    </p>
                  </div>
                  <div className={styles.gridItem}>
                    <Img
                      src="../images/about/about/_KUN8588.jpg"
                      alt="Ferajna z Hoovera"
                      className={`${styles.image} `}
                      loading="lazy"
                      loader={<Loader />}
                      unloader={<img src={NoPhoto} alt="Brak zdjęcia" className={styles.image} />}
                    />
                  </div>
                  <div className={styles.gridItem}>
                    <p className={styles.text}>
                      Okrzyknęliśmy się Ferajną z Hoovera, gdyż to właśnie na skwerze Hoovera przy
                      Krakowskim Przedmieściu w Warszawie już od kilku lat można nas spotkać podczas
                      najważniejszych rocznic państwowych, świąt i ważnych dni w historii naszego
                      miasta i kraju.
                    </p>
                    <p className={styles.text}>
                      Jako zespół nie tylko spontanicznie występujemy na ulicy, ale także angażujemy
                      się w pomoc warszawskim powstańcom. Spotykamy się z nimi na różnych
                      wydarzeniach lub odwiedzamy ich z okazji urodzin, przynosząc muzyczną laurkę.
                    </p>
                  </div>
                  <div className={styles.gridItem}>
                    <Img
                      src="../images/about/about/IMG_2636.jpg"
                      alt="Ferajna z Hoovera"
                      className={`${styles.image} `}
                      loading="lazy"
                      loader={<Loader />}
                      unloader={<img src={NoPhoto} alt="Brak zdjęcia" className={styles.image} />}
                    />
                  </div>
                  <div className={styles.gridItem}>
                    <p className={styles.text}>
                      Kiedy pozwalają na to nasze pozamuzyczne obowiązki, koncertujemy także w
                      innych miastach Polski. Można nas spotkać na różnych piknikach historycznych,
                      na ulicach, w szkołach i kościołach. Kilka razy mieliśmy przyjemność
                      występować na Festiwalu Niepodległa na Krakowskim Przedmieściu oraz na
                      Festiwalu Dziękujemy Polsko.
                    </p>
                    <p className={styles.text}>
                      W 2020 roku otrzymaliśmy srebrną statuetkę na gali BohaterON za całokształt
                      naszych dotychczasowych działań oraz aktywny udział w akcjach na rzecz
                      kombatantów.
                    </p>
                  </div>
                  <div className={styles.gridItem}>
                    <Img
                      src="../images/about/about/bohateron.jpg"
                      alt="Ferajna z Hoovera"
                      className={`${styles.image}`}
                      loading="lazy"
                      loader={<Loader />}
                      unloader={<img src={NoPhoto} alt="Brak zdjęcia" className={styles.image} />}
                    />
                  </div>
                </>
              )}

              {/* ===== TABLET ===== */}

              {matches.tablet && (
                <>
                  <div className={styles.gridItem}>
                    <p className={styles.text}>
                      Jesteśmy grupą znajomych praktycznie od dzieciństwa. Kilka lat temu
                      spontanicznie połączyliśmy nasze muzyczne talenty i w pewne sierpniowe
                      popołudnie zaczęliśmy grać piosenki powstańcze, które znaliśmy m.in. z
                      harcerstwa. Naszym celem było oddanie hołdu powstańcom i zaprezentowanie ich
                      repertuaru wszystkim warszawiakom.
                    </p>
                    <p className={styles.text}>
                      Ciepłe przyjęcie przez publiczność sprawiło, że gramy do dziś, przybliżając
                      naszym słuchaczom nie tylko piosenki powstańcze, ale także utwory legionów
                      oraz inne znane melodie patriotyczne. W okresie świąt Bożego Narodzenia
                      wykonujemy również kolędy.
                    </p>
                    <p className={styles.text}>
                      Okrzyknęliśmy się Ferajną z Hoovera, gdyż to właśnie na skwerze Hoovera przy
                      Krakowskim Przedmieściu w Warszawie już od kilku lat można nas spotkać podczas
                      najważniejszych rocznic państwowych, świąt i ważnych dni w historii naszego
                      miasta i kraju.
                    </p>
                  </div>
                  <div className={styles.gridItem}>
                    <Img
                      src="../images/about/about/skwer1.jpg"
                      alt="Ferajna z Hoovera"
                      className={`${styles.image} ${styles.imageLeft}`}
                      loading="lazy"
                      loader={<Loader />}
                      unloader={<img src={NoPhoto} alt="Brak zdjęcia" className={styles.image} />}
                    />
                    <Img
                      src="../images/about/about/skwer3.jpg"
                      alt="Ferajna z Hoovera"
                      className={`${styles.image} ${styles.imageRight}`}
                      loading="lazy"
                      loader={<Loader />}
                      unloader={<img src={NoPhoto} alt="Brak zdjęcia" className={styles.image} />}
                    />
                    <Img
                      src="../images/about/about/fot. Stefan Różycki 2.jpg"
                      alt="Ferajna z Hoovera"
                      className={`${styles.image} ${styles.imageLeft}`}
                      loading="lazy"
                      loader={<Loader />}
                      unloader={<img src={NoPhoto} alt="Brak zdjęcia" className={styles.image} />}
                    />
                  </div>
                  <div className={styles.gridItem}>
                    <Img
                      src="../images/about/about/skwer4.jpg"
                      alt="Ferajna z Hoovera"
                      className={`${styles.image} ${styles.imageRight}`}
                      loading="lazy"
                      loader={<Loader />}
                      unloader={<img src={NoPhoto} alt="Brak zdjęcia" className={styles.image} />}
                    />
                    <Img
                      src="../images/about/about/bohateron.jpg"
                      alt="Ferajna z Hoovera"
                      className={`${styles.image} ${styles.imageLeft}`}
                      loading="lazy"
                      loader={<Loader />}
                      unloader={<img src={NoPhoto} alt="Brak zdjęcia" className={styles.image} />}
                    />
                    <Img
                      src="../images/about/about/IMG_2636.jpg"
                      alt="Ferajna z Hoovera"
                      className={`${styles.image} ${styles.imageRight}`}
                      loading="lazy"
                      loader={<Loader />}
                      unloader={<img src={NoPhoto} alt="Brak zdjęcia" className={styles.image} />}
                    />
                  </div>
                  <div className={styles.gridItem}>
                    <p className={styles.text}>
                      Jako zespół nie tylko spontanicznie występujemy na ulicy, ale także angażujemy
                      się w pomoc warszawskim powstańcom. Spotykamy się z nimi na różnych
                      wydarzeniach lub odwiedzamy ich z okazji urodzin, przynosząc muzyczną laurkę.
                    </p>
                    <p className={styles.text}>
                      Kiedy pozwalają na to nasze pozamuzyczne obowiązki, koncertujemy także w
                      innych miastach Polski. Można nas spotkać na różnych piknikach historycznych,
                      na ulicach, w szkołach i kościołach. Kilka razy mieliśmy przyjemność
                      występować na Festiwalu Niepodległa na Krakowskim Przedmieściu oraz na
                      Festiwalu Dziękujemy Polsko.
                    </p>
                    <p className={styles.text}>
                      W 2020 roku otrzymaliśmy srebrną statuetkę na gali BohaterON za całokształt
                      naszych dotychczasowych działań oraz aktywny udział w akcjach na rzecz
                      kombatantów.
                    </p>
                  </div>
                </>
              )}

              {/* ===== DESKTOP ===== */}

              {matches.desktop && (
                <>
                  <div className={styles.gridItem}>
                    <p className={styles.text}>
                      Jesteśmy grupą znajomych praktycznie od dzieciństwa. Kilka lat temu
                      spontanicznie połączyliśmy nasze muzyczne talenty i w pewne sierpniowe
                      popołudnie zaczęliśmy grać piosenki powstańcze, które znaliśmy m.in. z
                      harcerstwa. Naszym celem było oddanie hołdu powstańcom i zaprezentowanie ich
                      repertuaru wszystkim warszawiakom.
                    </p>
                    <p className={styles.text}>
                      Ciepłe przyjęcie przez publiczność sprawiło, że gramy do dziś, przybliżając
                      naszym słuchaczom nie tylko piosenki powstańcze, ale także utwory legionów
                      oraz inne znane melodie patriotyczne. W okresie świąt Bożego Narodzenia
                      wykonujemy również kolędy.
                    </p>
                    <p className={styles.text}>
                      Okrzyknęliśmy się Ferajną z Hoovera, gdyż to właśnie na skwerze Hoovera przy
                      Krakowskim Przedmieściu w Warszawie już od kilku lat można nas spotkać podczas
                      najważniejszych rocznic państwowych, świąt i ważnych dni w historii naszego
                      miasta i kraju.
                    </p>
                  </div>
                  <div className={styles.gridItem}>
                    <Img
                      src="../images/about/about/skwer1.jpg"
                      alt="Ferajna z Hoovera"
                      className={`${styles.image} ${styles.imageLeft}`}
                      loading="lazy"
                      loader={<Loader />}
                      unloader={<img src={NoPhoto} alt="Brak zdjęcia" className={styles.image} />}
                    />
                    <Img
                      src="../images/about/about/skwer3.jpg"
                      alt="Ferajna z Hoovera"
                      className={`${styles.image} ${styles.imageRight}`}
                      loading="lazy"
                      loader={<Loader />}
                      unloader={<img src={NoPhoto} alt="Brak zdjęcia" className={styles.image} />}
                    />
                  </div>
                  <div className={styles.gridItem}>
                    <Img
                      src="../images/about/about/skwer4.jpg"
                      alt="Ferajna z Hoovera"
                      className={`${styles.image} ${styles.imageRight}`}
                      loading="lazy"
                      loader={<Loader />}
                      unloader={<img src={NoPhoto} alt="Brak zdjęcia" className={styles.image} />}
                    />
                    <Img
                      src="../images/about/about/bohateron.jpg"
                      alt="Ferajna z Hoovera"
                      className={`${styles.image} ${styles.imageLeft}`}
                      loading="lazy"
                      loader={<Loader />}
                      unloader={<img src={NoPhoto} alt="Brak zdjęcia" className={styles.image} />}
                    />
                  </div>
                  <div className={styles.gridItem}>
                    <p className={styles.text}>
                      Jako zespół nie tylko spontanicznie występujemy na ulicy, ale także angażujemy
                      się w pomoc warszawskim powstańcom. Spotykamy się z nimi na różnych
                      wydarzeniach lub odwiedzamy ich z okazji urodzin, przynosząc muzyczną laurkę.
                    </p>
                    <p className={styles.text}>
                      Kiedy pozwalają na to nasze pozamuzyczne obowiązki, koncertujemy także w
                      innych miastach Polski. Można nas spotkać na różnych piknikach historycznych,
                      na ulicach, w szkołach i kościołach. Kilka razy mieliśmy przyjemność
                      występować na Festiwalu Niepodległa na Krakowskim Przedmieściu oraz na
                      Festiwalu Dziękujemy Polsko.
                    </p>
                    <p className={styles.text}>
                      W 2020 roku otrzymaliśmy srebrną statuetkę na gali BohaterON za całokształt
                      naszych dotychczasowych działań oraz aktywny udział w akcjach na rzecz
                      kombatantów.
                    </p>
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

export default About;
