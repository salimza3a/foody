import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "../../utils/HamburgerMenu";
function NavbarPage() {
  return (
    <>
      <div className={styles.container}>
        <HamburgerMenu />
        <span className={styles.logo_image}>
          <Link href="/">
            <a>
              <Image
                src="/food-logo.svg"
                alt="Logo image"
                width={130}
                height={30}
              />
            </a>
          </Link>
        </span>
        <ul className={styles.links}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/restaurants">
              <a>Restaurants</a>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <a>About us</a>
            </Link>
          </li>
          <li>
            <Link href="/how-it-works">
              <a>How it works</a>
            </Link>
          </li>
          <li>
            <Link href="/faqs">
              <a>FAQs</a>
            </Link>
          </li>
        </ul>
        <div className={styles.others}>
          <span className={styles.languages}></span>
          <button className={styles.signUpBtn}>Sign up</button>
        </div>
      </div>
    </>
  );
}

export default NavbarPage;
