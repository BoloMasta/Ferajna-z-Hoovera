import styles from "./AboutPage.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>Warszawiacy, patrioci, a przede wszystkim przyjaciele!</h2>

        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <p className={styles.text}>
              Jesteśmy grupą znajomych w zasadzie od dziecka. Kilka lat temu spontanicznie
              połączyliśmy swoje muzyczne talenty i wyszliśmy w sierpniowe popołudnie grać piosenki
              powstańcze, które znaliśmy m.in. z harcerstwa. Chcieliśmy w ten sposób oddać hołd
              powstańcom oraz przedstawić ich repertuar wszystkim warszawiakom.
            </p>
            <p className={styles.text}>
              Ciepły odbiór publiczności sprawił, że gramy do dziś, przybliżając słuchaczom nie
              tylko piosenki powstańcze, ale także utwory legionów oraz inne znane melodie
              patriotyczne, a w okresie świąt Bożego Narodzenia - kolędy.
            </p>
          </div>
          <div className={styles.gridItem}>
            <img
              src="../images/skwer1.jpg"
              alt="Warszawiacy"
              className={`${styles.image} ${styles.imageLeft}`}
              loading="lazy"
            />
            <img
              src="../images/skwer3.jpg"
              alt="Warszawiacy"
              className={`${styles.image} ${styles.imageRight}`}
              loading="lazy"
            />
          </div>

          <div className={styles.gridItem}>
            <img
              src="../images/skwer4.jpg"
              alt="Warszawiacy"
              className={`${styles.image} ${styles.imageRight}`}
              loading="lazy"
            />
            <img
              src="../images/bohateron.jpg"
              alt="Warszawiacy"
              className={`${styles.image} ${styles.imageLeft}`}
              loading="lazy"
            />
          </div>
          <div className={styles.gridItem}>
            <p className={styles.text}>
              Okrzyknęliśmy się Ferajną z Hoovera, gdyż to właśnie na skwerze Hoovera przy
              Krakowskim Przedmieściu w Warszawie już od 6 lat można nas spotkać w najważniejsze
              rocznice państwowe, święta i ważne dni dla historii naszego miasta i kraju.
            </p>
            <p className={styles.text}>
              Jako zespół nie tylko gramy spontanicznie na ulicy, ale także angażujemy się w pomoc
              na rzecz warszawskich powstańców. Spotykamy się z nimi na różnych wydarzeniach czy
              odwiedzamy ich z okazji urodzin z muzyczną laurką.
            </p>
            <p className={styles.text}>
              W 2020 roku otrzymaliśmy srebrną statuetkę na gali BohaterON, za całokształt naszych
              dotychczasowych działań oraz czynny udział w akcjach na rzecz kombatantów.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
