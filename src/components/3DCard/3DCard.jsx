import { useEffect } from "react";
import styles from "./3DCard.module.scss";

const Card = () => {
  useEffect(() => {
    const $card = document.querySelector("._3DCard-module__card");
    let bounds;

    function rotateToMouse(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      $card.style.transform = `
    scale3d(1.08, 1.08, 1.08)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;

      $card.querySelector("._3DCard-module__glow").style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff55,
      #0000000f
    )
  `;
    }

    $card.addEventListener("mouseenter", () => {
      bounds = $card.getBoundingClientRect();
      document.addEventListener("mousemove", rotateToMouse);
    });

    $card.addEventListener("mouseleave", () => {
      document.removeEventListener("mousemove", rotateToMouse);
      $card.style.transform = "";
      $card.style.background = "";
    });
  }, []);

  return (
    <section className={styles.cardContainer}>
      <div
        className={styles.card}
        onClick={() => {
          window.open("https://wydawnictwopoczekalnia.pl/", "_blank");
        }}
      >
        <div className={styles.glow}></div>
      </div>
      <div className={styles.description}>
        <h2 className={styles.title}>Kup płytę</h2>
        <p className={styles.text}>
          Zaprszamy do zakupu naszej płyty. Wszystkie utwory zostały nagrane w Quality Studio w Warszawie. Płyta jest
          dostępna w sprzedaży w sklepie internetowym wydawnictwa &nbsp;
          <a href="https://wydawnictwopoczekalnia.pl/" target="_blank" rel="noreferrer" style={{ fontWeight: "bold" }}>
            Poczekalnia.
          </a>
        </p>
      </div>
    </section>
  );
};

export default Card;
