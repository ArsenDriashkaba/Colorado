import Palette from "./Palette/Palette";

import { PaletteState } from "../../types";

import styles from "./PaletteList.module.css";

interface Props {
  palettes: Array<PaletteState>;
}

const PaletteList = ({ palettes }: Props): JSX.Element => {
  return (
    <section className={styles.container}>
      {palettes.map((paletteData, index) => (
        <Palette paletteData={paletteData} key={index} />
      ))}
    </section>
  );
};

export default PaletteList;
