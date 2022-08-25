import IcoButton from "../../IcoButton/IcoButton";
import ColorValue from "../ColorValue/ColorValue";
import { FaLockOpen, FaLock } from "react-icons/fa";
import { BiSliderAlt } from "react-icons/bi";
import ColorPicker from "../ColorPicker/ColorPicker";

import { rgbaToCssString } from "../../../utils/colors";

import { useColorPaletteContext } from "../../../state/colorPaletteContext";
import { PALETTE_ACTIONS } from "../../../state/types";
import { ColorVariant, RGB } from "../../../types";

import styles from "./ColorVariant.module.css";
import { useState } from "react";

interface Props {
  colorVariantId: number;
}

const ColorVariant = ({ colorVariantId }: Props): JSX.Element => {
  const { state, dispatch } = useColorPaletteContext();
  const [isColorPickerOpen, setIsColorPickerOpen] = useState<boolean>(false);

  const { value, isLocked, isDark }: ColorVariant = state[colorVariantId];
  const rgb: RGB = value.rgb;

  const handleLock = () =>
    dispatch({
      type: PALETTE_ACTIONS.ToggleLock,
      payload: { id: colorVariantId },
    });

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: rgbaToCssString(rgb) }}
    >
      <ColorValue value={value} isDark={!isDark} />
      <IcoButton
        icon={isLocked ? <FaLock /> : <FaLockOpen />}
        isDark={!isDark}
        onClick={handleLock}
      />

      {isColorPickerOpen ? (
        <ColorPicker
          colorVariantId={colorVariantId}
          handleClose={() => setIsColorPickerOpen(false)}
        />
      ) : (
        <IcoButton
          icon={<BiSliderAlt />}
          isDark={!isDark}
          onClick={() => setIsColorPickerOpen(true)}
        />
      )}
    </div>
  );
};

export default ColorVariant;
