import styles from "./Quote.module.scss";

const Quote = () => {
  return (
    <section className={styles.quote}>
      <div className={styles.box}>
        <i className={`${styles.fas} ${styles.fa1}`}></i>
        <div className={styles.text}>
          <i className={`${styles.fas} ${styles.fa1}`}></i>
          <div>
            <p>
              Żyć to działać, to rozsiewać po świecie talent, energię, uczucie, pomagać w czasie teraźniejszym
              pokoleniom przyszłym. — Władysław Reymont
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
