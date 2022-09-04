import styles from "../../styles/DiscoverSection.module.css";
import Image from "next/image";
function DiscoverSection() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <Image
            src="/Images/discover-pizza.svg"
            alt="Pizza"
            width={200}
            height={200}
            className={styles.img}
          />
          <div className={styles.textWrapper}>
            <span className={styles.discoverText}>
              Discover Restaurants Near From You
            </span>
            <button className={styles.btn}>Explore now</button>
          </div>
          <Image
            src="/Images/discover-hamburger.svg"
            alt="Hamburger"
            width={200}
            height={200}
            className={styles.img}
          />
        </div>
      </div>
    </>
  );
}

export default DiscoverSection;
