import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { BiArrowBack, BiCamera } from "react-icons/bi";
import { Img } from "react-image";
import { galleries } from "../../assets/images/gallery/gallery";
// import { gallerySorted } from "../../assets/images/gallery/gallery";
import Loader from "../../layouts/Loader/Loader";
import Button from "../../components/Button/Button";
import styles from "./GalleryPage.module.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [imagesToGallery, setImagesToGallery] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  //var url = new URL(window.location.href);
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
        {/* {images.length === 0 && !galleryId && (
          <>
            <h2 className={styles.title}>Galeria</h2>
            <div className={styles.grid}>
              {gallerySorted.map((images, index) => (
                <div
                  className={styles.gridItem}
                  key={index}
                  onClick={() => {
                    // setImages(images);

                    // if (url.searchParams.has("galleryId")) {
                    //   url.searchParams.delete("galleryId");
                    // }

                    // url = url + `/${images.galeryId}`;
                    // location.href = url;

                    location.href = `/gallery/${images.galeryId}`;
                  }}
                >
                  <Img
                    src={images.images[0].url}
                    alt={images.images[0].alt}
                    className={`${styles.image} ${styles.cover}`}
                    loading="lazy"
                    loader={<Loader />}
                    unloader={
                      <img
                        src="./../images/brak-zdjecia.png"
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
        )} */}

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
                <div className={styles.gridItem} key={index}>
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
                    onClick={() => setImageIndex(index)}
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
              startIndex={imageIndex}
              additionalClass={styles.imageGallery}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
