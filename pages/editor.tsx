import { NextPage } from "next";
import Head from "next/head";
import Input from "../components/Input/Input";
import ColorPaletteProvider from "../context/colorPaletteContext";

import styles from "../styles/Editor.module.css";

const Editor: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colorado</title>
        <meta name="description" content="Generate your own color palette" />
        <link rel="icon" href="/static/icons/chromatic.png" />
      </Head>

      <ColorPaletteProvider>
        <main className={styles.main}></main>
      </ColorPaletteProvider>
    </div>
  );
};

export default Editor;
