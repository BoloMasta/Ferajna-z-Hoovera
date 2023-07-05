import { useState } from "react";
import members from "../../assets/images/members/members";
import styles from "./Members.module.scss";

const Members = () => {
  const [activeMember, setActiveMember] = useState(0);

  return (
    <section className={styles.members}>
      <div className={styles.container}>
        <div className={styles.membersImages}>
          {members.members.map((member) => (
            <div
              className={styles.member}
              key={member.id}
              onClick={() => setActiveMember(member.id)}
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
            <div className={styles.text}>Wybierz członka zespołu</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Members;
