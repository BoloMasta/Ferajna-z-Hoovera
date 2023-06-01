import styles from "./Features.module.scss";

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ferajna z Hoovera</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque dicta assumenda ad,
          odio commodi officiis a porro natus rem nesciunt repellat possimus reprehenderit enim
          voluptatum numquam molestias corrupti nulla!
        </p>
      </div>
    </section>
  );
};

export default Features;
