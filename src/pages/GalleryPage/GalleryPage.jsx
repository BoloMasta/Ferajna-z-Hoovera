import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { BiArrowBack, BiCamera } from "react-icons/bi";
import { Img } from "react-image";
import { galleries } from "../../assets/images/gallery/gallery";
import Loader from "../../layouts/Loader/Loader";
import Button from "../../components/Button/Button";
import styles from "./GalleryPage.module.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";
import NoPhoto from "/images/brak-zdjecia.png";

const GalleryPage = () => {
  const [galleryData, setGalleryData] = useState(null);
  const [formattedImages, setFormattedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { galleryId } = useParams();
  const navigate = useNavigate();

  const fetchGalleryData = useCallback(() => {
    if (galleryId) {
      const gallery = galleries.find((g) => g.galeryId === galleryId);
      setGalleryData(gallery);
    }
  }, [galleryId]);

  useEffect(() => {
    fetchGalleryData();
  }, [fetchGalleryData]);

  useEffect(() => {
    if (galleryData?.images) {
      setFormattedImages(
        galleryData.images.map((image) => ({
          original: image.url,
          thumbnail: image.urlThumbnail,
        }))
      );
    }
  }, [galleryData]);

  const handleImageClick = (index) => setCurrentImageIndex(index + 1);
  const handleBackClick = () => navigate("/gallery");

  if (!galleryData) {
    return <Loader />;
  }

  const { images, location, date, author } = galleryData;
  const isGalleryView = currentImageIndex > 0;

  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.title}>{`${location} - ${date}`}</h2>
        <p className={styles.author}>
          <BiCamera className={styles.icon} />
          {author}
        </p>
        <Button className={styles.button} onClick={handleBackClick}>
          <BiArrowBack className={styles.icon} />
          Powrót
        </Button>

        {!isGalleryView ? (
          <div className={styles.grid}>
            {images.map((image, index) => (
              <div className={styles.gridItem} key={index}>
                <Img
                  src={image.url}
                  alt={image.alt}
                  className={styles.image}
                  loading="lazy"
                  loader={<Loader />}
                  unloader={<img src={NoPhoto} alt="Brak zdjęcia" className={styles.image} />}
                  onClick={() => handleImageClick(index)}
                />
              </div>
            ))}
          </div>
        ) : (
          <ImageGallery
            items={formattedImages}
            showPlayButton
            showFullscreenButton
            showNav
            showThumbnails
            showBullets
            lazyLoad
            slideDuration={500}
            slideInterval={3000}
            thumbnailPosition="bottom"
            startIndex={currentImageIndex - 1}
            additionalClass={styles.imageGallery}
          />
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
