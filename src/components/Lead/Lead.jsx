import { Parallax, useParallax } from "react-scroll-parallax";
import Media from "react-media";
import { breakpoints } from "../../assets/breakpoints";
import styles from "./Lead.module.scss";

const Lead = () => {
  const parallax = useParallax({
    onProgressChange: (progress) => {
      if (parallax.ref.current) {
        parallax.ref.current.style.setProperty("--progress", progress.toString());
      }
    },
  });

  return (
    <section className={styles.lead}>
      <Media queries={breakpoints}>
        {(matches) =>
          matches.mobile ? (
            <h1 className={styles.title} ref={parallax.ref}>
              Serwus
            </h1>
          ) : (
            <Parallax speed={20} translateY={[200, 0]} opacity={[-3, 2]}>
              <h1
                className={styles.title}
                ref={parallax.ref}
                style={{ letterSpacing: `calc(10px * (var(--progress)) * 4)` }}
              >
                Serwus
              </h1>
            </Parallax>
          )
        }
      </Media>
    </section>
  );
};

export default Lead;
