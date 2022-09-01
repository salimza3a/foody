import LayoutPage from "../components/Layout";
import "../styles/reset.css";
import "../styles/global.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </>
  );
}

export default MyApp;
