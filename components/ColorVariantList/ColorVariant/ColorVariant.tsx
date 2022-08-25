import IcoButton from "../../IcoButton/IcoButton";
import ColorValue from "../ColorValue/ColorValue";
import { FaLockOpen, FaLock, FaSlidersH } from "react-icons/fa";

import { useColorPaletteContext } from "../../../state/colorPaletteContext";
import { PALETTE_ACTIONS } from "../../../state/types";

import styles from "./ColorVariant.module.css";
import { ColorVariant } from "../../../types";
import ColorPicker from "../ColorPicker/ColorPicker";

interface Props {
  colorVariantId: number;
}

const ColorVariant = ({ colorVariantId }: Props): JSX.Element => {
  const { state, dispatch } = useColorPaletteContext();
  const { value, isLocked, isDark }: ColorVariant = state[colorVariantId];
  const { hex } = value;

  const handleLock = () =>
    dispatch({
      type: PALETTE_ACTIONS.ToggleLock,
      payload: { id: colorVariantId },
    });

  return (
    <div className={styles.container} style={{ backgroundColor: `${hex}` }}>
      <ColorValue value={value} isDark={!isDark} />
      <IcoButton
        icon={isLocked ? <FaLock /> : <FaLockOpen />}
        isDark={!isDark}
        onClick={handleLock}
      />
      <IcoButton icon={<FaSlidersH />} isDark={!isDark} />
      <ColorPicker colorVariantId={colorVariantId} />
    </div>
  );
};

export default ColorVariant;
