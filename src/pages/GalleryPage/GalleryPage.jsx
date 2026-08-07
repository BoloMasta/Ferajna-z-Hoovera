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
import NoPhoto from "/images/brak-zdjecia.png?url";

const GalleryPage = () => {
  const [galleryData, setGalleryData] = useState(null);
  const [formattedImages, setFormattedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
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

  // On gallery data load: format images, reset viewer index and scroll to top
  useEffect(() => {
    if (galleryData?.images) {
      setFormattedImages(
        galleryData.images.map((image) => ({
          original: image.url || NoPhoto,
          thumbnail: image.urlThumbnail || image.url || NoPhoto,
          // alt/texty do użycia w rendererach
          originalAlt: image.alt || "Zdjęcie",
          thumbnailAlt: image.alt || "Miniaturka",
        })),
      );

      // reset viewer state and scroll to top when entering a gallery
      setCurrentImageIndex(null);
      // smooth scroll to top so user sees header/title like in LyricsPage
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [galleryData]);

  // Also ensure we scroll to top when the route/galleryId changes (entering a new gallery)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentImageIndex(null);
  }, [galleryId]);

  const handleBackClick = () =>
    currentImageIndex !== null ? setCurrentImageIndex(null) : navigate("/galeria");

  // When opening an image from the grid, scroll to top so the ImageGallery is fully visible,
  // then open the viewer at the clicked index (user still sees the clicked image).
  const handleImageClick = (index) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // small timeout ensures scroll starts before ImageGallery mounts; optional but smooth
    setTimeout(() => setCurrentImageIndex(index), 100);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== "Escape") return;

      if (currentImageIndex !== null) {
        setCurrentImageIndex(null);
      } else {
        navigate("/galeria");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentImageIndex, navigate]);

  if (!galleryData) {
    return <Loader />;
  }

  const { images, location, date, author } = galleryData;
  const isGalleryView = currentImageIndex !== null;

  // custom renderer for main image: replaces broken image with NoPhoto on error
  const renderItem = (item) => (
    <div className="image-gallery-image" style={{ width: "100%" }}>
      <img
        src={item.original || NoPhoto}
        alt={item.originalAlt || "Zdjęcie"}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = NoPhoto;
        }}
        draggable={false}
        style={{ width: "100%", height: "auto", objectFit: "contain", maxHeight: "80vh" }}
      />
    </div>
  );

  // custom renderer for thumbnail: same fallback behavior
  const renderThumbInner = (item) => (
    <img
      src={item.thumbnail || item.original || NoPhoto}
      alt={item.thumbnailAlt || item.originalAlt || "Miniaturka"}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = NoPhoto;
      }}
      draggable={false}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );

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
              <button
                type="button"
                className={styles.gridItem}
                key={image.url || index}
                onClick={() => handleImageClick(index)}
                aria-label={`Otwórz zdjęcie ${index + 1}`}
              >
                <Img
                  src={image.urlCover || NoPhoto}
                  alt={image.alt || `Zdjęcie ${index + 1}`}
                  className={styles.image}
                  loading="lazy"
                  loader={<Loader />}
                  unloader={
                    <img
                      src={NoPhoto}
                      alt="Brak zdjęcia"
                      className={styles.image}
                      onClick={() => handleImageClick(index)}
                    />
                  }
                />
              </button>
            ))}
          </div>
        ) : (
          <ImageGallery
            items={formattedImages}
            renderItem={renderItem}
            renderThumbInner={renderThumbInner}
            showPlayButton
            showFullscreenButton
            showNav
            showThumbnails
            showBullets
            lazyLoad={true}
            slideDuration={500}
            slideInterval={3000}
            thumbnailPosition="bottom"
            startIndex={currentImageIndex}
            additionalClass={styles.imageGallery}
            onSlide={(index) => setCurrentImageIndex(index)}
          />
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
