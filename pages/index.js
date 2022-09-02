import Head from "next/head";
import Image from "next/image";
import FeaturesSection from "../components/FeaturesSection";
import MainSection from "../components/MainSection";
import NewFoodsSection from "../components/NewFoodsSection";
import OffersSection from "../components/OffersSection";
import { getOffersValues } from "../pages/api/offers";
export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>My Next Js</title>
        <meta name="description" content="Home" />
      </Head>
      <main>
        <MainSection />
        <FeaturesSection />
        <OffersSection {...data} />
        <NewFoodsSection />
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await getOffersValues.then((res) => res.data);

  return {
    props: {
      data: res,
    },
  };
}
