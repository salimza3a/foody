import NavbarPage from "../Navbar";
import FooterPage from "../Footer";
import styles from "../../styles/Layout.module.css";
function LayoutPage({ children }) {
  return (
    <>
      <div className={styles.container}>
        <NavbarPage />
        {children}
      </div>
      <FooterPage />
    </>
  );
}

export default LayoutPage;
