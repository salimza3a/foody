import data from "../../mocks/offers.json";
import styles from "../../styles/OffersSection.module.css";
import Image from "next/image";
function OffersSection({ offersData }) {
  return (
    <>
      <div className={styles.container}>
        {offersData.map((item) => (
          <div key={item.id}>
            <div
              className={styles.card_container}
              style={{
                display: "flex",
                flexDirection: item.id % 2 !== 0 ? "row" : "row-reverse",
              }}
            >
              <div className={styles.card_text_wrapper}>
                <div className={styles.card_title}>{item.offer_title}</div>
                <div className={styles.card_text}>{item.offer_text}</div>
              </div>
              <div className={styles.img_container}>
                <Image
                  src={`/${item.offer_poster}`}
                  alt=""
                  width={421}
                  height={556}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default OffersSection;
