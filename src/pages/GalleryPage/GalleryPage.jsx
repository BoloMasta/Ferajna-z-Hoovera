import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { BiArrowBack, BiCamera } from "react-icons/bi";
import { Img } from "react-image";
import { galleries } from "../../assets/images/gallery/gallery";
import Loader from "../../layouts/Loader/Loader";
import Button from "../../components/Button/Button";
import styles from "./GalleryPage.module.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [imagesToGallery, setImagesToGallery] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const { galleryId } = useParams();

  useEffect(() => {
    if (galleryId) {
      const images = galleries.find((images) => images.galeryId === galleryId);
      setImages(images);
    }
  }, [galleryId]);

  useEffect(() => {
    const imagesToGalleryURLS = images.images?.map((image) => ({
      original: image.url,
      thumbnail: image.urlThumbnail,
    }));
    setImagesToGallery(imagesToGalleryURLS);
  }, [images]);

  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        {images.images?.length > 0 && imageIndex === 0 && (
          <>
            <h2 className={styles.title}>{`${images.location} - ${images.date}`}</h2>
            <p className={styles.author}>
              <BiCamera className={styles.icon} />
              {images.author}
            </p>

            <Button className={styles.button} onClick={() => (location.href = "/gallery")}>
              <BiArrowBack className={styles.icon} />
              Powrót
            </Button>

            <div className={styles.grid}>
              {images.images.map((image, index) => (
                <div className={styles.gridItem} key={index + 1}>
                  <Img
                    src={image.url}
                    alt={image.alt}
                    className={styles.image}
                    loading="lazy"
                    loader={<Loader />}
                    unloader={
                      <img
                        src="./../images/brak-zdjecia.png"
                        alt="Brak zdjęcia"
                        className={styles.image}
                      />
                    }
                    onClick={() => setImageIndex(index + 1)}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {images.images?.length > 0 && imageIndex > 0 && (
          <>
            <h2 className={styles.title}>{`${images.location} - ${images.date}`}</h2>
            <p className={styles.author}>
              <BiCamera className={styles.icon} />
              {images.author}
            </p>
            <Button className={styles.button} onClick={() => setImageIndex(0)}>
              <BiArrowBack className={styles.icon} />
              Powrót
            </Button>
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
              startIndex={imageIndex - 1}
              additionalClass={styles.imageGallery}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
