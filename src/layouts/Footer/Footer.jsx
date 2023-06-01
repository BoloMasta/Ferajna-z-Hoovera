import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>Bolesław Adamiec &copy; &nbsp; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
