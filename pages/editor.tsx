import { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Editor.module.css";

const Editor: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colorado</title>
        <meta name="description" content="Generate your own color palette" />
        <link rel="icon" href="/static/icons/chromatic.png" />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
};

export default Editor;
