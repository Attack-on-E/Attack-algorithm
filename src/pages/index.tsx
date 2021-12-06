import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const PixiWindow = dynamic(() => import("../components/PixiWindow"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Attack Algorithm</title>
        <meta
          name="description"
          content="Logical Thinking Skills Learning App"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-full flex justify-center bg-black">
        {/* <PixiWindow /> */}
      </div>
    </div>
  );
};

export default Home;
