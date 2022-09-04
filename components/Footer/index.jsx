import Image from "next/image";
import styles from "../../styles/Footer.module.css";
function FooterPage() {
  return (
    <>
      <div className={styles.container}>
        <footer className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.contacts}>
              <span>
                <Image
                  src="/food-logo.svg"
                  alt="Foody logo"
                  width={92}
                  height={32}
                  className={styles.imgLogo}
                />
              </span>
              <p className={styles.contactText}>
                Lorem ipsum is placeholder text commonly used in the graphic,
              </p>
              <ul className={styles.socialMedias}>
                <li>
                  <Image
                    src="/facebook-logo.svg"
                    alt="Facebook logo"
                    width={50}
                    height={50}
                  />
                </li>
                <li>
                  <Image
                    src="/instagram-logo.svg"
                    alt="Instagram logo"
                    width={50}
                    height={50}
                  />
                </li>
                <li>
                  <Image
                    src="/twitter-logo.svg"
                    alt="Twitter logo"
                    width={50}
                    height={50}
                  />
                </li>
              </ul>
            </div>
            <div className={styles.otherThings}>
              <div className={styles.popular}>
                <span>Popular</span>
                <ul>
                  <li>Pizzas</li>
                  <li>Hamburgers</li>
                  <li>Drinks</li>
                  <li>Lasagnas</li>
                </ul>
              </div>
              <div className={styles.payment}>
                <span>Payment</span>
                <ul>
                  <li>Cash</li>
                  <li>Debit cards</li>
                  <li>Mobile Payments</li>
                </ul>
              </div>
              <div className={styles.help}>
                <span>Helo</span>
                <ul>
                  <li>Email Us</li>
                  <li>Phone Us</li>
                  <li>Payment problem</li>
                  <li>Restaurant problem</li>
                </ul>
              </div>
            </div>
          </div>
          <p className={styles.info}>
            Created by{" "}
            <a
              href="https://github.com/salimza3a"
              className={styles.smallTouch}
            >
              salimza3a
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default FooterPage;
