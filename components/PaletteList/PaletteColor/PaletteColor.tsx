import { rgbaToCssString } from "../../../utils/colors";

import { ColorVariant } from "../../../types";

import styles from "./PaletteColor.module.css";

interface Props {
  color: ColorVariant;
}

const PaletteColor = ({ color }: Props): JSX.Element => {
  const rgb = color.value.rgb;

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: rgbaToCssString(rgb) }}
    ></div>
  );
};

export default PaletteColor;
