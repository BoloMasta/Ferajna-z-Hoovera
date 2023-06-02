import styles from "./GalleryPage.module.scss";

const GalleryPage = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.title}>Galeria</h2>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <img
              src="../images/skwer1.jpg"
              alt="Warszawiacy"
              className={styles.image}
              loading="lazy"
            />
            <p className={styles.text}>
              Krakowskie przedmieście
              {"\n"}18.09.2021
            </p>
          </div>
          <div className={styles.gridItem}>
            <img
              src="../images/skwer1.jpg"
              alt="Warszawiacy"
              className={styles.image}
              loading="lazy"
            />
            <p className={styles.text}>
              Krakowskie przedmieście
              {"\n"}18.09.2021
            </p>
          </div>
          <div className={styles.gridItem}>
            <img
              src="../images/skwer1.jpg"
              alt="Warszawiacy"
              className={styles.image}
              loading="lazy"
            />
            <p className={styles.text}>
              Krakowskie przedmieście
              {"\n"}18.09.2021
            </p>
          </div>
          <div className={styles.gridItem}>
            <img
              src="../images/skwer1.jpg"
              alt="Warszawiacy"
              className={styles.image}
              loading="lazy"
            />
            <p className={styles.text}>
              Krakowskie przedmieście
              {"\n"}18.09.2021
            </p>
          </div>
          <div className={styles.gridItem}>
            <img
              src="../images/skwer1.jpg"
              alt="Warszawiacy"
              className={styles.image}
              loading="lazy"
            />
            <p className={styles.text}>
              Krakowskie przedmieście
              {"\n"}18.09.2021
            </p>
          </div>
          <div className={styles.gridItem}>
            <img
              src="../images/skwer1.jpg"
              alt="Warszawiacy"
              className={styles.image}
              loading="lazy"
            />
            <p className={styles.text}>
              Krakowskie przedmieście
              {"\n"}18.09.2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
