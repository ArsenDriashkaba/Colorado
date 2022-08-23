import { NextPage } from "next";
import Head from "next/head";
import ColorPaletteProvider from "../state/colorPaletteContext";
import ColorVariant from "../components/ColorVariantList/ColorVariant/ColorVariant";

import styles from "../styles/Editor.module.css";
import Menu from "../components/Menu/Menu";

const Editor: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colorado</title>
        <meta name="description" content="Generate your own color palette" />
        <link rel="icon" href="/static/icons/chromatic.png" />
      </Head>

      <ColorPaletteProvider>
        <main className={styles.main}>
          <Menu />
          <ColorVariant />
        </main>
      </ColorPaletteProvider>
    </div>
  );
};

export default Editor;
