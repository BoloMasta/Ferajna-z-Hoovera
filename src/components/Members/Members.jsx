import { useState, useRef, useCallback } from "react";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import members from "../../assets/members/members.json";
import styles from "./Members.module.scss";

const Members = () => {
  const [activeMember, setActiveMember] = useState(0);
  const memberRefs = useRef([]);

  polyfillCountryFlagEmojis();

  const handleClick = useCallback((memberId) => {
    setActiveMember(memberId);

    if (window.innerWidth < 768) {
      scrollTo({ top: 850, behavior: "smooth" });
    } else if (window.innerWidth < 1280) {
      scrollTo({ top: 465, behavior: "smooth" });
    } else {
      scrollTo({ top: 550, behavior: "smooth" });
    }
  }, []);

  const handleMouseEnter = useCallback((index) => {
    if (memberRefs.current[index]) {
      memberRefs.current[index].classList.add(`${styles.memberActive}`);
    }
  }, []);

  const handleMouseLeave = useCallback(
    (index) => {
      if (activeMember !== members.members[index].id) {
        if (memberRefs.current[index]) {
          memberRefs.current[index].classList.remove(`${styles.memberActive}`);
        }
      }
    },
    [activeMember]
  );

  return (
    <section className={styles.members}>
      <div className={styles.container}>
        <div className={styles.membersImages}>
          {members.members.map((member, index) => (
            <div
              className={`${styles.member} ${
                activeMember === member.id ? styles.memberActive : ""
              }`}
              key={member.id}
              ref={(el) => (memberRefs.current[index] = el)}
              onClick={() => handleClick(member.id)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
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
