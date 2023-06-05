import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { BiArrowBack, BiCamera } from "react-icons/bi";
import { Img } from "react-image";
import Loader from "../../layouts/Loader/Loader";
import styles from "./GalleryPage.module.scss";

import { gallerySorted } from "../../assets/images/gallery/gallery";

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const galleryNew = images.images?.map((image) => ({
      original: image.url,
      thumbnail: image.urlSmall,
    }));
    setGallery(galleryNew);
  }, [images]);

  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        {images.length === 0 ? (
          <>
            <h2 className={styles.title}>Galeria</h2>
            <div className={styles.grid}>
              {gallerySorted.map((images, index) => (
                <div className={styles.gridItem} key={index} onClick={() => setImages(images)}>
                  <Img
                    src={images.images[0].url}
                    alt={images.images[0].alt}
                    className={`${styles.image} ${styles.cover}`}
                    loading="lazy"
                    loader={<Loader />}
                    unloader={
                      <img
                        src="./images/brak-zdjecia.png"
                        alt="Brak zdjęcia"
                        className={styles.image}
                      />
                    }
                  />
                  <p className={styles.text}>
                    {images.location}
                    {"\n"}
                    {images.date}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className={styles.title}>{`${images.location} - ${images.date}`}</h2>
            <p className={styles.author}>
              <BiCamera className={styles.icon} />
              {images.author}
            </p>
            <button className={styles.button} onClick={() => setImages([])}>
              <BiArrowBack className={styles.icon} />
              Powrót
            </button>
            <div className={styles.grid}>
              {images.images.map((image, index) => (
                <div className={styles.gridItem} key={index}>
                  <Img
                    src={image.url}
                    alt={image.alt}
                    className={styles.image}
                    loading="lazy"
                    loader={<Loader />}
                    unloader={
                      <img
                        src="./images/brak-zdjecia.png"
                        alt="Brak zdjęcia"
                        className={styles.image}
                      />
                    }
                  />
                </div>
              ))}
            </div>
            <ImageGallery
              items={gallery}
              // showPlayButton={false}
              // showFullscreenButton={false}
              // showNav={false}
              // showThumbnails={false}
              // showBullets={true}
              // lazyLoad={true}
              // slideDuration={0}
              // slideInterval={2000}
              // startIndex={images.index}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
