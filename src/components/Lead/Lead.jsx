import { Parallax } from "react-scroll-parallax";
import Media from "react-media";
import { breakpoints } from "../../assets/breakpoints";
import styles from "./Lead.module.scss";

const Lead = () => {
  return (
    <section className={styles.lead}>
      <Media queries={breakpoints}>
        {(matches) =>
          matches.mobile ? (
            <h1 className={styles.title}>Serwus</h1>
          ) : (
            <Parallax speed={20} translateY={[250, -100]} opacity={[-3, 2]}>
              <h1 className={styles.title}>Serwus</h1>
            </Parallax>
          )
        }
      </Media>
    </section>
  );
};

export default Lead;
