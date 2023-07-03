import styles from "./Switch.module.scss";

const Switch = ({ checked, onChange }) => {
  return (
    <section className={styles.switch}>
      <div className={styles.gallery}>
        <img src="../images/skwer1.jpg" alt="Archer" />
        <img src="../images/skwer3.jpg" alt="Saber" />
        <h2 className={styles.title} id={styles.leftTitle}>
          O zespole
        </h2>
        <h2 className={styles.title} id={styles.rightTitle}>
          Członkowie
        </h2>
      </div>
    </section>
  );
};

export default Switch;
