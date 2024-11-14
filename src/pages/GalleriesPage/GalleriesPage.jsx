import { useNavigate } from "react-router-dom";
import { Img } from "react-image";
import Loader from "../../layouts/Loader/Loader";
import { galleriesSortedCovers } from "../../assets/images/gallery/gallery";
import NoPhoto from "/images/brak-zdjecia.png?url";
import styles from "./GalleriesPage.module.scss";

const GalleriesPage = () => {
  const navigate = useNavigate();

  const handleGalleryClick = (galleryId) => {
    navigate(`/galeria/${galleryId}`);
  };

  return (
    <div className={styles.galleries}>
      <div className={styles.container}>
        <h2 className={styles.title}>Galeria</h2>
        <div className={styles.grid}>
          {galleriesSortedCovers.map((gallery) => (
            <div
              className={styles.gridItem}
              key={gallery.galeryId}
              onClick={() => handleGalleryClick(gallery.galeryId)}
            >
              <Img
                src={gallery.cover}
                alt={gallery.coverAlt}
                className={`${styles.image} ${styles.cover}`}
                loading="lazy"
                loader={<Loader />}
                unloader={
                  <img
                    src={NoPhoto}
                    alt="Brak zdjęcia"
                    className={`${styles.image} ${styles.cover}`}
                  />
                }
              />
              <p className={styles.text}>
                {gallery.location}
                <br />
                {gallery.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleriesPage;
