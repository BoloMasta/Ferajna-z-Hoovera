import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Button from "../../components/Button/Button";
import styles from "./LyricsPage.module.scss";
import lyricsData from "../../data/lyrics.json";

const LyricsPage = () => {
  const [songs, setSongs] = useState([]);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const sorted = [...lyricsData].sort((a, b) =>
      a.title.localeCompare(b.title, "pl", { sensitivity: "base" }),
    );
    setSongs(sorted);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selected) {
        setSelected(null);
        document.title = "Teksty piosenek";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  const openSong = (song) => {
    setSelected(song);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = song.title + " — Teksty";
  };

  const handleBackClick = () => {
    if (selected) {
      setSelected(null);
      document.title = "Teksty piosenek";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/muzyka");
    }
  };

  if (selected) {
    return (
      <section className={styles.LyricsPage}>
        <div className={styles.container}>
          {/* HEADER ROW: tytuł + górny przycisk. mobile-first: kolumna; na tablet+ będą w jednym wierszu */}
          <div className={styles.headerRow}>
            <h2 className={styles.title}>{selected.title}</h2>

            <Button className={styles.button} onClick={handleBackClick}>
              <BiArrowBack className={styles.icon} />
              Powrót
            </Button>
          </div>

          {/* Wrapper: tekst + środkowy przycisk są w normalnym przepływie */}
          <div className={styles.lyricsWrapper}>
            <article className={styles.lyrics}>
              <div className={styles.lyricsText}>{selected.lyrics}</div>
            </article>

            {/* Dodatkowy przycisk Powrót - WYŚRODKOWANY POD TEKSTEM i wyglądem identyczny z górnym */}
            <Button
              className={`${styles.button} ${styles.centerButton}`}
              onClick={handleBackClick}
              aria-label="Powrót"
            >
              <BiArrowBack className={styles.icon} />
              Powrót
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.LyricsPage}>
      <div className={styles.container}>
        <h2 className={styles.title}>Teksty piosenek</h2>

        <ol className={styles.playlist}>
          {songs.map((s) => (
            <li
              key={s.id}
              onClick={() => openSong(s)}
              className={styles.playlistItem}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openSong(s);
              }}
            >
              {s.title}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default LyricsPage;
