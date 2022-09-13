import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";

import Menu from "../components/Menu/Menu";

import axiosClient from "../utils/axiosClient";

import styles from "../styles/Library.module.css";

import { PaletteInfo } from "../types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axiosClient.get("getPalettes");
  const palettes: Array<PaletteInfo> = response?.data;

  return {
    props: { palettes },
  };
};

const Editor: NextPage = ({
  palettes,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(palettes);

  return (
    <div className={styles.container}>
      <Head>
        <title>Colorado</title>
        <meta name="description" content="Generate your own color palette" />
        <link rel="icon" href="/static/icons/chromatic.png" />
      </Head>
      <main>
        <Menu />
      </main>
    </div>
  );
};

export default Editor;
