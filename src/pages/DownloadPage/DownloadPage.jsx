import styles from "./DownloadPage.module.scss";

const DownloadPage = () => {
  return (
    <section className={styles.download}>
      <div className={styles.container}>
        <img
          className={styles.cover}
          src="/images/plyta.jpg"
          alt="Okładka płyty Kto się tak wydziera?"
        />

        <a href="/music/LEGIONY.mp3" download>
          <button type="submit" className={styles.button}>
            Pobierz płytę
          </button>
        </a>
      </div>
    </section>
  );
};

export default DownloadPage;
