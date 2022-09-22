import IcoButton from "../../IcoButton/IcoButton";
import PaletteColorList from "../PaletteColorList/PaletteColorList";

import { RiDeleteBinFill } from "react-icons/ri";

import { PaletteState } from "../../../types";

import styles from "./Palette.module.css";

interface Props {
  paletteData: PaletteState;
}

const Palette = ({ paletteData }: Props): JSX.Element => {
  const { name, colorVariants } = paletteData;

  return (
    <div className={styles.container}>
      <div>
        <h2>{name}</h2>
        <IcoButton icon={<RiDeleteBinFill />} isDark={true} />
      </div>
      <PaletteColorList paletteColors={colorVariants} />
    </div>
  );
};

export default Palette;
