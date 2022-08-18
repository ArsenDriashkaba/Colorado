import type { NextPage } from "next";
import Head from "next/head";
import IcoText from "../components/IcoText/IcoText";
import Logo from "../components/Logo/Logo";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colorado</title>
        <meta name="description" content="Generate your own color palette" />
        <link rel="icon" href="/static/icons/chromatic.png" />
      </Head>

      <main className={styles.main}>
        <Logo />
        <IcoText text="test" icoPath="favicon.ico" altIcoText="test ico" />
      </main>
    </div>
  );
};

export default Home;
