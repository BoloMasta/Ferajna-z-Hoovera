import { useState, useEffect } from "react";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import members from "../../assets/members/members.json";
import styles from "./Members.module.scss";

const Members = () => {
  const [activeMember, setActiveMember] = useState(0);
  polyfillCountryFlagEmojis();

  useEffect(() => {
    for (let i = 0; i < members.members.length; i++) {
      if (i + 1 === activeMember) {
        document.getElementById(i + 1).classList.add(`${styles.memberActive}`);
      } else document.getElementById(i + 1).classList.remove(`${styles.memberActive}`);
    }
  }, [activeMember]);

  return (
    <section className={styles.members}>
      <div className={styles.container}>
        <div className={styles.membersImages}>
          {members.members.map((member) => (
            <div
              className={styles.member}
              key={member.id}
              id={member.id}
              onClick={() => {
                if (
                  document.getElementById(member.id).classList.contains(`${styles.memberActive}`)
                ) {
                  document.getElementById(member.id).classList.remove(`${styles.memberActive}`);
                } else {
                  document.getElementById(member.id).classList.add(`${styles.memberActive}`);
                }
                setActiveMember(member.id);

                if (window.innerWidth < 768) {
                  scrollTo({ top: 850, behavior: "smooth" });
                } else if (window.innerWidth < 1280) {
                  scrollTo({ top: 465, behavior: "smooth" });
                } else {
                  scrollTo({ top: 550, behavior: "smooth" });
                }
              }}
              onMouseEnter={() => {
                document.getElementById(member.id).classList.add(`${styles.memberActive}`);
              }}
              onMouseLeave={() => {
                if (activeMember !== member.id)
                  document.getElementById(member.id).classList.remove(`${styles.memberActive}`);
              }}
            >
              <img src={member.avatar} alt={member.avatarAlt} className={styles.memberAvatar} />
              <img src={member.photo} alt={member.photoAlt} className={styles.memberPhoto} />
            </div>
          ))}
        </div>

        <div className={styles.membersText}>
          <p className={styles.header}>
            Imię:{" "}
            <span className={styles.text}>
              {activeMember ? members.members[activeMember - 1].name : ""}
            </span>
          </p>
          <p className={styles.header}>
            Pseudonim:{" "}
            <span className={styles.text}>
              {activeMember ? `"` + members.members[activeMember - 1].alias + `"` : ""}
            </span>
          </p>
          {activeMember ? (
            <div
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: members.members[activeMember - 1].description }}
            ></div>
          ) : (
            <div className={styles.text}>Wybierz ferajniaka</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Members;
