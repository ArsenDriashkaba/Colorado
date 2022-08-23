import { useColorPaletteContext } from "../../state/colorPaletteContext";
import ColorVariant from "./ColorVariant/ColorVariant";

import styles from "./ColorVariantList.module.css";

const ColorVariantList = (): JSX.Element => {
  const { state, dispatch } = useColorPaletteContext();

  return (
    <section className={styles.container}>
      {state.map((colorVariant, index) => (
        <ColorVariant key={index} />
      ))}
    </section>
  );
};

export default ColorVariantList;
