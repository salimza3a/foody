import Head from "next/head";
import Image from "next/image";
import FeaturesSection from "../components/FeaturesSection";
import MainSection from "../components/MainSection";
import OffersSection from "../components/OffersSection";
export default function Home() {
  return (
    <>
      <Head>
        <title>My Next Js</title>
        <meta name="description" content="Home" />
      </Head>
      <main>
        <MainSection />
        <FeaturesSection />
        <OffersSection />
      </main>
    </>
  );
}
