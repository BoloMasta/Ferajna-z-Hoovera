import styles from "./SongbookPage.module.scss";

const SongbookPage = () => {
  return (
    <section className={styles.songbook}>
      <div className={styles.container}>
        <h1>Teksty piosenek wykonywanych przez Ferajnę z Hoovera</h1>

        <a href="/documents/Ferajna z Hoovera - teksty.docx" download>
          <button type="submit" className={styles.button}>
            Pobierz śpiewnik DOCX
          </button>
        </a>
      </div>
    </section>
  );
};

export default SongbookPage;
