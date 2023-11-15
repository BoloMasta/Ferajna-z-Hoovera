import { useEffect } from "react";
import Media from "react-media";
import { breakpoints } from "../../assets/breakpoints";
import styles from "./3DCard.module.scss";

const Card = () => {
  useEffect(() => {
    const $card = document.querySelector("#card");
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

      $card.style.transform =
        "scale3d(1.08, 1.08, 1.08) " +
        "rotate3d(" +
        center.y / 100 +
        ", " +
        -center.x / 100 +
        ", 0, " +
        Math.log(distance) * 2 +
        "deg)";

      const glowStyle = $card.querySelector("#glow").style;
      glowStyle.backgroundImage =
        "radial-gradient(" +
        "circle at " +
        (center.x * 2 + bounds.width / 2) +
        "px " +
        (center.y * 2 + bounds.height / 2) +
        "px, #ffffff55, #0000000f)";
    }

    if (!$card) return;

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
      <Media queries={breakpoints}>
        {(matches) =>
          matches.desktop ? (
            <div
              id="card"
              className={styles.card}
              onClick={() => {
                window.open(
                  "https://wydawnictwopoczekalnia.pl/pl/p/Kto-sie-tak-wydziera/24",
                  "_blank"
                );
              }}
            >
              <div className={styles.glow} id="glow"></div>
            </div>
          ) : (
            <div className={styles.card}></div>
          )
        }
      </Media>

      <div className={styles.description}>
        <h2 className={styles.title}>Kup płytę</h2>
        <p className={styles.text}>
          Zaprszamy do zakupu naszej płyty. Wszystkie utwory zostały nagrane w Quality Studio w
          Warszawie. Płyta jest dostępna w sprzedaży w sklepie internetowym wydawnictwa{" "}
          <a
            href="https://wydawnictwopoczekalnia.pl/pl/p/Kto-sie-tak-wydziera/24"
            target="_blank"
            rel="noreferrer"
            style={{ fontWeight: "bold" }}
          >
            Poczekalnia.
          </a>
        </p>
      </div>
    </section>
  );
};

export default Card;
