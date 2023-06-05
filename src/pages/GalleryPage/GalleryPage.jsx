import { useState, useReducer, useEffect } from "react";
import { BiArrowBack, BiCamera } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./GalleryPage.module.scss";

import { gallerySorted } from "../../assets/images/gallery/gallery";

const imageReducer = (state, action) => {
  switch (action.type) {
    case "SET_IMAGES":
      return action.payload;
    case "SET_LOADED":
      return {
        ...state,
        images: state.images.map((image) => {
          if (image.id === action.payload) {
            return { ...image, loaded: true };
          } else {
            return image;
          }
        }),
      };
    case "SET_EXTRA_PROPS":
      return {
        ...state,
        images: state.images.map((image) => {
          return {
            ...image,
            loaded: false,
            id: Math.random().toString(36),
          };
        }),
      };
    case "RESET_IMAGES":
      return [];
    default:
      return state;
  }
};

const GalleryPage = () => {
  const [images, dispatch] = useReducer(imageReducer, []);

  // const handleImageLoaded = (imageId) => {
  //   dispatch({ type: "SET_LOADED", payload: imageId });
  // };

  const handleImageLoaded = (e) => {
    dispatch({ type: "SET_LOADED", payload: e.target.dataset.id });
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        {images?.length === 0 ? (
          <>
            <h2 className={styles.title}>Galeria</h2>
            <div className={styles.grid}>
              {gallerySorted.map((images, index) => (
                <div
                  className={styles.gridItem}
                  key={index}
                  onClick={() => {
                    dispatch({ type: "SET_IMAGES", payload: images });
                    dispatch({ type: "SET_EXTRA_PROPS" });
                  }}
                >
                  <img src={images.images[0].url} alt={images.images[0].alt} className={styles.image} loading="lazy" />
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
            <button className={styles.button} onClick={() => dispatch({ type: "RESET_IMAGES" })}>
              <BiArrowBack className={styles.icon} />
              Powrót
            </button>
            <div className={styles.grid}>
              {images.images.map((image, index) => (
                <div className={styles.gridItem} key={index}>
                  {!image.loaded && <Skeleton height={220} width={700} />}
                  <img
                    src={image.url}
                    alt={image.alt}
                    className={styles.image}
                    onLoad={handleImageLoaded}
                    data-id={image.id}
                    height={image.loaded ? "auto" : "0"}
                    width={image.loaded ? "auto" : "0"}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
