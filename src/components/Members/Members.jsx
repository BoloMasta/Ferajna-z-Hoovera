import members from "../../assets/images/members/members";
import styles from "./Members.module.scss";

const Members = () => {
  return (
    <section className={styles.members}>
      <h2 className={styles.title}>Skład zespołu</h2>

      <div className={styles.container}>
        <div className={styles.membersImages}>
          {members.members.map((member, index) => (
            <div className={styles.member} key={index}>
              <img src={member.avatar} alt={member.avatarAlt} className={styles.memberAvatar} />
              <img src={member.photo} alt={member.photoAlt} className={styles.memberPhoto} />
            </div>
          ))}
        </div>

        <div className={styles.membersText}>
          <p className={styles.text}>
            Zespół Ferajna z Hoovera powstał w 2019 roku. W skład zespołu wchodzą: <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Members;
