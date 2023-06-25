import styles from "./MusicPage.module.scss";

const MusicPage = () => {
  return (
    <section className={styles.music}>
      <div className={styles.container}>
        <h2 className={styles.title}>Muzyka</h2>

        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <h3 className={styles.header}>"Warszawo ma" - teledysk</h3>
            <p className={styles.text}>
              Zapraszamy na teledysk do utworu "Warszawo ma", który do naszej muzyki zrealizowała w wakacje 2015 roku
              warszawska młodzież. Za koordynację tego projektu odpowiadał Jędrzej Gorski, Jeremi Skrodzki i Mateusz
              Wyszogrodzki, zaś wsprawcia udzieliło m.in.: Miasto Stołeczne Warszawa, Stowarzyszenie Harcerskie oraz
              Inicjatywy Młodzieżowe.
            </p>
          </div>
          <div className={styles.gridItem}>
            <iframe
              width="500"
              height="315"
              className={styles.video}
              src="https://www.youtube.com/embed/PbWtu5Sa_NE"
              title="YouTube video player"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className={styles.gridItem}>
            <p className={styles.text}>Zdjęcie płyty</p>
          </div>
          <div className={styles.gridItem}>
            <h3 className={styles.header}>Kup naszą płytę</h3>
            <p className={styles.text}>
              Zachecamy do zakupy naszej płyty z najpiękniejszymi polskimi pieśniami patriotycznymi. Płyta jest dostępna
              w seklepie internetowym wydawcnictwa Poczekalnia.
            </p>
          </div>

          <div className={styles.gridItem}>
            <h3 className={styles.header}>Playlista ulicznych wykonań</h3>
            <p className={styles.text}>
              Przez lata grania na ulicach Warszawy otrzymaliśmy od was wiele nagrań. Oto playlista z wybranymi utworami
              z różnych lat. Dajcie znać które wykonania najbardziej przypadły wam do gustu.
            </p>
          </div>
          <div className={styles.gridItem}>
            <iframe
              width="500"
              height="315"
              className={styles.video}
              src="https://www.youtube.com/embed/videoseries?list=PLp6GCgoiewEnlRwpoEGp3VLT3kftTZsvP"
              title="YouTube video player"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className={styles.gridItem}>
            <iframe
              width="400"
              height="240"
              className={styles.video}
              src="https://www.youtube.com/embed/-2klUYihhJo"
              title="YouTube video player"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <iframe
              width="400"
              height="240"
              className={styles.video}
              style={{ marginTop: "20px" }}
              src="https://www.youtube.com/embed/zyE7tw4JvvY"
              title="YouTube video player"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.gridItem}>
            <h3 className={styles.header}>Filmy edukacyjne</h3>
            <p className={styles.text}>
              Dzięki wspólpracy z ORPEG nagraliśmy już 2 filmy edukacyjne na temat polskich pieśni patriotycznych.
              Produkukcje te są dostępne bezpłatnie na platformie YouTube oraz były już wielokrotnie wykorzystywane
              podczas lekcji historii i muzyki. Za zdjęcia i montaż obu filmów odpowiadała firma F&B Works, my za oprawę
              muzyczną, zaś ekspecri za treść merytoryczną. Zachęcamy do oglądania i udostępniania.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPage;
