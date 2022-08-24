import IcoButton from "../../IcoButton/IcoButton";
import ColorValue from "../ColorValue/ColorValue";
import { FaLockOpen, FaLock, FaSlidersH } from "react-icons/fa";

import { useColorPaletteContext } from "../../../state/colorPaletteContext";

import styles from "./ColorVariant.module.css";
import { ColorVariant } from "../../../types";

interface Props {
  colorVariantId: number;
}

const ColorVariant = ({ colorVariantId }: Props): JSX.Element => {
  const { state, dispatch } = useColorPaletteContext();
  const { value, isLocked, isDark }: ColorVariant = state[colorVariantId];
  const { hex } = value;

  return (
    <div className={styles.container} style={{ backgroundColor: `${hex}` }}>
      <ColorValue value={value} isDark={!isDark} />
      <IcoButton
        icon={isLocked ? <FaLock /> : <FaLockOpen />}
        isDark={!isDark}
      />
      <IcoButton icon={<FaSlidersH />} isDark={!isDark} />
    </div>
  );
};

export default ColorVariant;
