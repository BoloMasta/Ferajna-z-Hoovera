import { Img } from "react-image";
import Loader from "../../layouts/Loader/Loader";
import { galleriesSortedCovers } from "../../assets/images/gallery/gallery";
import NoPhoto from "/images/brak-zdjecia.png";
import styles from "./GalleriesPage.module.scss";

const GalleriesPage = () => {
  return (
    <div className={styles.galleries}>
      <div className={styles.container}>
        <h2 className={styles.title}>Galeria</h2>
        <div className={styles.grid}>
          {galleriesSortedCovers.map((images, index) => (
            <div
              className={styles.gridItem}
              key={index}
              onClick={() => {
                location.href = `/gallery/${images.galeryId}`;
              }}
            >
              <Img
                src={images.cover}
                alt={images.coverAlt}
                className={`${styles.image} ${styles.cover}`}
                loading="lazy"
                loader={<Loader />}
                unloader={<img src={NoPhoto} alt="Brak zdjęcia" className={styles.image} />}
              />
              <p className={styles.text}>
                {images.location}
                {"\n"}
                {images.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleriesPage;
