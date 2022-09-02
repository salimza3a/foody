import styles from "../../styles/NewFoodsSection.module.css";
import Image from "next/image";
function NewFoodsSection() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.food_title}>
          <strong>Our Popular Update New Foods</strong>{" "}
        </p>
        <p className={styles.food_text}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <div className={styles.food_cards}>
          <div className={styles.card}>
            <Image
              src="/Images/dubble-cheese.svg"
              alt="Dubble cheese"
              width={239}
              height={223}
            />
            <span className={styles.card_title}>Dubble cheess</span>
            <p className={styles.card_text}>
              Lorem ipsum is placeholder commonly used in the graphic
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src="/Images/margarita-pizza.svg"
              alt="Margarita pizza"
              width={239}
              height={223}
            />
            <span className={styles.card_title}>Margarita Pizza</span>
            <p className={styles.card_text}>
              Lorem ipsum is placeholder commonly used in the graphic
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src="/Images/twister-menu.svg"
              alt="Twister menu"
              width={239}
              height={223}
            />
            <span className={styles.card_title}>Twister Menu</span>
            <p className={styles.card_text}>
              Lorem ipsum is placeholder commonly used in the graphic
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewFoodsSection;
