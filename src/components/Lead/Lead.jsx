import { Parallax } from "react-scroll-parallax";

//import { ParallaxBanner } from "react-scroll-parallax";
// import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

import styles from "./Lead.module.scss";

const Lead = () => {
  return (
    <section className={styles.lead}>
      <Parallax speed={20} translateY={[450, 200]} opacity={[-0.8, 1.5]}>
        <h1 className={styles.title}>Serwus</h1>
      </Parallax>

      {/* <ParallaxBanner
        layers={[
          {
            image: "/images/lead.jpg",
            speed: -130,
            translateY: [0, 30],
            style: { filter: "blur(1px)", inset: "-100px 0px 0px 0px" },
            onProgress: (progress) => console.log(progress),
          },
          {
            speed: -15,
            opacity: [0.5, 1],
            translateY: [50, 30],

            children: <h1 className={styles.title}>Serwus</h1>,
          },

          {
            image: "/images/lead-front.png",
            speed: -10,
          },
        ]}
        style={{
          height: "650px",
          maxHeight: "650px",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      /> */}
    </section>
  );
};

export default Lead;
