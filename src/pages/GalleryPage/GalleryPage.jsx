import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { BiArrowBack, BiCamera } from "react-icons/bi";
import { Img } from "react-image";
import { gallerySorted } from "../../assets/images/gallery/gallery";
import Loader from "../../layouts/Loader/Loader";
import styles from "./GalleryPage.module.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [imagesToGallery, setImagesToGallery] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const imagesToGalleryURLS = images.images?.map((image) => ({
      original: image.url,
      thumbnail: image.urlSmall,
    }));
    setImagesToGallery(imagesToGalleryURLS);
  }, [images]);

  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        {images.length === 0 && (
          <>
            <h2 className={styles.title}>Galeria</h2>
            <div className={styles.grid}>
              {gallerySorted.map((images, index) => (
                <div
                  className={styles.gridItem}
                  key={index}
                  onClick={() => {
                    setImages(images);
                  }}
                >
                  <Img
                    src={images.images[0].url}
                    alt={images.images[0].alt}
                    className={`${styles.image} ${styles.cover}`}
                    loading="lazy"
                    loader={<Loader />}
                    unloader={<img src="./images/brak-zdjecia.png" alt="Brak zdjęcia" className={styles.image} />}
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
        )}

        {images?.images?.length > 0 && imageIndex === 0 && (
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
                    unloader={<img src="./images/brak-zdjecia.png" alt="Brak zdjęcia" className={styles.image} />}
                    onClick={() => setImageIndex(index)}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {images?.images?.length > 0 && imageIndex > 0 && (
          <ImageGallery
            items={imagesToGallery}
            showPlayButton={true}
            showFullscreenButton={true}
            showNav={true}
            showThumbnails={true}
            showBullets={true}
            lazyLoad={true}
            slideDuration={500}
            slideInterval={3000}
            thumbnailPosition="bottom"
            startIndex={imageIndex}
          />
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
