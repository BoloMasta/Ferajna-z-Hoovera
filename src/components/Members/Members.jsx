import styles from "./Members.module.scss";

const Members = () => {
  return (
    <section className={styles.members}>
      <h2 className={styles.title}>Skład zespołu</h2>

      <div className={styles.container}>
        <div className={styles.membersImages}>
          <img src="../images/ferajna1.jpg" alt="Zdjęcie zespołu Ferajna z Hoovera" className={styles.image} />
          <img src="../images/ferajna2.jpg" alt="Zdjęcie zespołu Ferajna z Hoovera" className={styles.image} />
          <img src="../images/ferajna3.jpg" alt="Zdjęcie zespołu Ferajna z Hoovera" className={styles.image} />
        </div>

        <div className={styles.membersText}>
          <p className={styles.text}>
            Zespół Ferajna z Hoovera powstał w 2019 roku. W skład zespołu wchodzą: <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Members;
