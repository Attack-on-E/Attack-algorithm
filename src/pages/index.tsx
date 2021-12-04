import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const PixiWindow = dynamic(() => import("../components/PixiWindow"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Attack Algorithm</title>
        <meta name="description" content="Logical Thinking Skills Learning App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PixiWindow />
    </div>
  );
};

export default Home;
