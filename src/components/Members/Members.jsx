import { useState, useEffect } from "react";
import members from "../../assets/images/members/members";
import styles from "./Members.module.scss";

const Members = () => {
  const [activeMember, setActiveMember] = useState(0);

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
                setActiveMember(member.id);
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
