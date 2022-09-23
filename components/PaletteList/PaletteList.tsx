import { useState } from "react";
import Palette from "./Palette/Palette";

import { PalettesInfo } from "../../types";

import { deletePaletteFromArray } from "../../utils/helpers/palettes";

import styles from "./PaletteList.module.css";

interface Props {
  palettesData: PalettesInfo;
}

const PaletteList = ({ palettesData }: Props): JSX.Element => {
  const [palettes, setPalettes] = useState<PalettesInfo>(palettesData);

  const deleter = (_id: string): void =>
    setPalettes(deletePaletteFromArray(_id, palettes));

  return (
    <section className={styles.container}>
      {palettes.map((paletteData, index) => (
        <Palette paletteData={paletteData} key={index} deleter={deleter} />
      ))}
    </section>
  );
};

export default PaletteList;
