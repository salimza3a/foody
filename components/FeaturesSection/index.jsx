import styles from "../../styles/FeaturesSection.module.css";
import Image from "next/image";
function FeaturesSection() {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.features_text}>Features</h3>
        <p className={styles.text}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Image
              src="/Images/discount-boucher.svg"
              alt="Discount Boucher"
              width={200}
              height={200}
            />
            <span className={styles.cardTitle}>Discount Boucher</span>
            <p className={styles.cardText}>
              Lorem ipsum is placeholder commonly used in the graphic{" "}
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src="/Images/fresh-food.svg"
              alt="Fresh Healthy Food"
              width={200}
              height={200}
            />
            <span className={styles.cardTitle}>Fresh healthy Food</span>
            <p className={styles.cardText}>
              Lorem ipsum is placeholder commonly used in the graphic{" "}
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src="/Images/fast-delivery.svg"
              alt="Fast Home Delivery"
              width={200}
              height={200}
            />
            <span className={styles.cardTitle}>Fast Home Delivery</span>
            <p className={styles.cardText}>
              Lorem ipsum is placeholder commonly used in the graphic{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesSection;
