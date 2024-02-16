import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { playlist } from "./playlist";
import styles from "./PlayerPage.module.scss";

const PlayerPage = () => {
  const [track, setTrack] = useState(playlist[0].src);

  const nextTrack = () => {
    const index = playlist.findIndex((el) => el.src === track);
    if (index === playlist.length - 1) {
      setTrack(playlist[0].src);
    } else {
      setTrack(playlist[index + 1].src);
    }
  };

  const prevTrack = () => {
    const index = playlist.findIndex((el) => el.src === track);
    if (index === 0) {
      setTrack(playlist[playlist.length - 1].src);
    } else {
      setTrack(playlist[index - 1].src);
    }
  };

  return (
    <section className={styles.player}>
      <div className={styles.container}>
        <img
          src="../images/teaser/kto.png"
          loading="lazy"
          alt="Kto się tak wydziera?"
          className={styles.kto}
        />
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <AudioPlayer
              autoPlay
              showSkipControls
              showJumpControls={false}
              showFilledVolume
              autoPlayAfterSrcChange={true}
              src={track}
              onClickNext={() => nextTrack()}
              onClickPrevious={() => prevTrack()}
              onEnded={() => track !== playlist[playlist.length - 1].src && nextTrack()}
              header={playlist.find((el) => el.src === track).title}
            />
          </div>

          <div className={styles.gridItem}>
            <ol className={styles.playlist}>
              {playlist.map((el) => (
                <li
                  key={el.src}
                  onClick={() => setTrack(el.src)}
                  className={
                    el.src === track
                      ? `${styles.active} ${styles.playlistItem}`
                      : styles.playlistItem
                  }
                >
                  {el.title}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <img
          src="../images/teaser/ferajna.png"
          loading="lazy"
          alt="Ferajna z Hoovera"
          className={styles.ferajna}
        />
      </div>
    </section>
  );
};

export default PlayerPage;
