import { useState } from "react";
import Switch from "../../components/Switch/Switch";
import About from "../../components/About/About";
import Members from "../../components/Members/Members";
import styles from "./AboutPage.module.scss";

const AboutPage = () => {
  const [active, setActive] = useState("");

  return (
    <section className={styles.aboutPage}>
      <div className={styles.container}>
        <Switch active={active} setActive={setActive} />
        {active === "left" && <About />}
        {active === "right" && <Members />}
      </div>
    </section>
  );
};

export default AboutPage;
