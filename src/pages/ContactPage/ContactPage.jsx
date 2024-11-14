import { GiRotaryPhone, GiMailbox, GiRingingBell } from "react-icons/gi";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import styles from "./ContactPage.module.scss";

const contactList = [
  {
    name: "Łukasz Kosiński",
    phone: "+48667777615",
  },
  {
    name: "Bolesław Adamiec",
    phone: "+48693993930",
  },
  {
    name: "Andrzej Ostrowski",
    phone: "+48662242604",
  },
];

const socialLinks = [
  {
    id: "facebook",
    href: "https://www.facebook.com/ferajnazhoovera",
    icon: <BsFacebook className={styles.listIcon} />,
    label: "Facebook",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/ferajnazhoovera/",
    icon: <BsInstagram className={styles.listIcon} />,
    label: "Instagram",
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/@ferajnazhoovera4955/videos",
    icon: <BsYoutube className={styles.listIcon} />,
    label: "YouTube",
  },
];

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
              {contactList.map(({ name, phone }) => (
                <li className={styles.listItem} key={phone}>
                  <p className={styles.listName}>{name}</p>
                  <a href={`tel:${phone}`} className={styles.link}>
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.gridItem}>
            <GiMailbox className={styles.icon} />
            <p className={styles.header}>Napisz</p>
            <div className={styles.listItem}>
              E-mail
              <a href="mailto:ferajnazhoovera@gmail.com" className={styles.link}>
                ferajnazhoovera@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.gridItem}>
            <GiRingingBell className={styles.icon} />
            <p className={styles.header}>Obserwuj</p>
            <ul className={styles.list}>
              {socialLinks.map(({ id, href, icon, label }) => (
                <li className={`${styles.listItem} ${styles[id]}`} key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                    aria-label={label}
                  >
                    {icon}
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <img src="/images/logo2.png" alt="Logo Ferajny z Hoovera" className={styles.image} />
    </section>
  );
};

export default ContactPage;
