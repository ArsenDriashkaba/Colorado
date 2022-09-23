import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";

import PaletteList from "../components/PaletteList/PaletteList";

import axiosClient from "../utils/axiosClient";

import styles from "../styles/Library.module.css";

import { PalettesInfo } from "../types";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axiosClient.get("palettes");
  const palettes: PalettesInfo = response?.data;

  return {
    props: { palettes },
  };
};

const Editor: NextPage = ({
  palettes,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colorado</title>
        <meta name="description" content="Generate your own color palette" />
        <link rel="icon" href="/static/icons/chromatic.png" />
      </Head>
      <main>
        <PaletteList palettesData={palettes} />
      </main>
    </div>
  );
};

export default Editor;
