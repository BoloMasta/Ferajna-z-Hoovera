GiRotaryPhone;
import { GiRotaryPhone, GiMailbox, GiRingingBell } from "react-icons/gi";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Kontakt</h2>

        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <GiRotaryPhone className={styles.icon} />

            <p className={styles.header}>Zadzwoń</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <p className={styles.listName}>Łukasz Kosiński</p>
                <a href="tel:+48667777615" className={styles.link}>
                  + 48 667 777 615
                </a>
              </li>
              <li className={styles.listItem}>
                <p className={styles.listName}>Bolesław Adamiec</p>
                <a href="tel:+48693993930" className={styles.link}>
                  + 48 693 993 930
                </a>
              </li>
              <li className={styles.listItem}>
                <p className={styles.listName}>Andrzej Ostrowski</p>
                <a href="tel:+48662242604" className={styles.link}>
                  + 48 662 242 604
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.gridItem}>
            <GiMailbox className={styles.icon} />
            <p className={styles.header}>Napisz</p>
            <div className={styles.listItem}>
              E-mail
              <a
                href="mailto:
              ferajnazhoovera@gmail.com"
                className={styles.link}
              >
                ferajnazhoovera@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.gridItem}>
            <GiRingingBell className={styles.icon} />
            <p className={styles.header}>Obserwuj</p>
            <ul className={styles.list}>
              <li className={styles.listItem} id={styles.facebook}>
                <a href="https://www.facebook.com/ferajnazhoovera" className={styles.link}>
                  <BsFacebook className={styles.listIcon} />
                  Facebook
                </a>
              </li>
              <li className={styles.listItem} id={styles.instagram}>
                <a href="https://www.instagram.com/ferajnazhoovera/" className={styles.link}>
                  <BsInstagram className={styles.listIcon} />
                  Instagram
                </a>
              </li>
              <li className={styles.listItem} id={styles.youtube}>
                <a href="http://www.youtube.com/ferajnazhoovera" className={styles.link}>
                  <BsYoutube className={styles.listIcon} />
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <img src="/images/logo2.png" alt="Logo Ferajny z Hoovera" className={styles.image} />
    </section>
  );
};

export default ContactPage;
