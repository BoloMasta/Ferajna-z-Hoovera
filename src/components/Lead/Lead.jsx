import { Parallax } from "react-scroll-parallax";

import styles from "./Lead.module.scss";

const Lead = () => {
  return (
    <section className={styles.lead}>
      <Parallax speed={20} translateY={[250, 100]}>
        <h1 className={styles.title}>Serwus</h1>
      </Parallax>
    </section>
  );
};

export default Lead;
