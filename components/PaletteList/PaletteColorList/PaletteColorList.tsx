import PaletteColor from "../PaletteColor/PaletteColor";

import { ColorVariants, PaletteState } from "../../../types";

import styles from "./PaletteColorList.module.css";

interface Props {
  paletteColors: ColorVariants;
}

const PaletteColorList = ({ paletteColors }: Props): JSX.Element => {
  return (
    <div className={styles.colorsWrapper}>
      {paletteColors.map((colorData, index) => (
        <PaletteColor color={colorData} key={index} />
      ))}
    </div>
  );
};

export default PaletteColorList;
