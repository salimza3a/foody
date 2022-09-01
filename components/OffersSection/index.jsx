import data from "../../mocks/offers.json";
import styles from "../../styles/OffersSection.module.css";
import Image from "next/image";
function OffersSection() {
  console.log(data, " data");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card_container}>
          <div className={styles.card_text_wrapper}>
            <div className={styles.card_title}>{data[0].offer_title}</div>
            <div className={styles.card_text}>{data[0].offer_text}</div>
          </div>
          <div className={styles.img_container}>
            <Image
              src={`/${data[2].offer_poster}`}
              alt=""
              width={421}
              height={556}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OffersSection;
