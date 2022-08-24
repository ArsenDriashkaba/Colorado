import Menu from "../Menu/Menu";
import ColorVariantList from "../ColorVariantList/ColorVariantList";

import { useColorPaletteContext } from "../../state/colorPaletteContext";

import styles from "./EditorContent.module.css";

const EditorContent = (): JSX.Element => {
  const { state, dispatch } = useColorPaletteContext();

  return (
    <section className={styles.container}>
      <Menu />
      <ColorVariantList />
    </section>
  );
};

export default EditorContent;
