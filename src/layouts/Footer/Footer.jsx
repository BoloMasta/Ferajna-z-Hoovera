import logo from "/images/logo.png";
import { BsFacebook, BsInstagram, BsYoutube, BsEnvelopeAt } from "react-icons/bs";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Ferajna z Hoovera logo" className={styles.logo} />
          </div>

          <div className={styles.mail}>
            <a href="mailto:ferajnazhoovera@gmail.com" className={styles.mailText}>
              <BsEnvelopeAt className={styles.mailIcon} />
              ferajnazhoovera@gmail.com
            </a>
          </div>

          <div className={styles.socials}>
            <div className={styles.socialsIcon} id={styles.iconFacebook}>
              <a
                href="https://www.facebook.com/ferajnazhoovera"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <BsFacebook className={styles.icon} />
              </a>
            </div>

            <div className={styles.socialsIcon} id={styles.iconInstagram}>
              <a
                href="https://www.instagram.com/ferajnazhoovera/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <BsInstagram className={styles.icon} />
              </a>
            </div>

            <div className={styles.socialsIcon} id={styles.iconYoutube}>
              <a
                href="https://www.youtube.com/ferajnazhoovera"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <BsYoutube className={styles.icon} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          <p className={styles.copyText}>&copy; 2024 Ferajna z Hoovera.</p>
          <p className={styles.copyText}>
            Projekt i wykonanie: &nbsp;
            <a
              href="https://github.com/BoloMasta"
              target="_blank"
              rel="noreferrer"
              className={styles.copyLink}
            >
              Bolesław Adamiec
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
