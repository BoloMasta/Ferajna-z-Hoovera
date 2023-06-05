import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src="./images/loader.png" alt="loader" className={styles.image} />
    </div>
  );
};

export default Loader;
