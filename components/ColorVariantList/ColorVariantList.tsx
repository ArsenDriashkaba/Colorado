import { useColorPaletteContext } from "../../state/colorPaletteContext";
import { ColorVariants } from "../../types";
import ColorVariant from "./ColorVariant/ColorVariant";

import styles from "./ColorVariantList.module.css";

const ColorVariantList = (): JSX.Element => {
  const { state } = useColorPaletteContext();
  const colorVariants: ColorVariants = state.colorVariants;

  return (
    <section className={styles.container}>
      {colorVariants.map((_, index) => (
        <ColorVariant key={index} colorVariantId={index} />
      ))}
    </section>
  );
};

export default ColorVariantList;
