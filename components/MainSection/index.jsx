import styles from "../../styles/MainSection.module.css";
import Image from "next/image";
function MainSection() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left_side}>
          <h1 className={styles.mainText}>
            Our Food site makes it easy to find local food
          </h1>
          <p className={styles.paragraphText}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className={styles.btns}>
            <button className={styles.registerBtn}>Register</button>
            <button className={styles.orderBtn}>Order now</button>
          </div>
        </div>
        <div className={styles.right_side}>
          <Image
            src="/Images/burger.svg"
            alt="Burger image"
            width={650}
            height={550}
            objectFit="cover"
            className={styles.burgerImg}
            style={{ filter: "grayscale: 100%" }}
          />
        </div>
      </div>
    </>
  );
}
export default MainSection;
