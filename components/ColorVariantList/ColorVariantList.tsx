import { useColorPaletteContext } from "../../state/colorPaletteContext";
import ColorVariant from "./ColorVariant/ColorVariant";

import styles from "./ColorVariantList.module.css";

const ColorVariantList = (): JSX.Element => {
  const { state } = useColorPaletteContext();

  return (
    <section className={styles.container}>
      {state.map((_, index) => (
        <ColorVariant key={index} colorVariantId={index} />
      ))}
    </section>
  );
};

export default ColorVariantList;
