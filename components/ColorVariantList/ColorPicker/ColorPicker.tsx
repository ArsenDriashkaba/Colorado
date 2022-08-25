import { MouseEventHandler, useEffect, useState } from "react";
import { ChromePicker, ColorResult } from "react-color";

import IcoButton from "../../IcoButton/IcoButton";
import { GrFormClose } from "react-icons/gr";

import { useColorPaletteContext } from "../../../state/colorPaletteContext";
import { PALETTE_ACTIONS } from "../../../state/types";
import { ColorVariant, RGB } from "../../../types";

import { DEFAULT_ALPHA_CHANNEL_VALUE } from "../../../constants";
import { generateColorVariant } from "../../../utils/colors";

import styles from "./ColorPicker.module.css";

interface Props {
  colorVariantId: number;
  handleClose: MouseEventHandler;
}

const chromePickerStyles = {
  default: {
    picker: {
      boxShadow: "none",
      maxWidth: "90%",
    },
  },
};

const ColorPicker = ({ colorVariantId, handleClose }: Props): JSX.Element => {
  const { state, dispatch } = useColorPaletteContext();
  const colorVariant: ColorVariant = state[colorVariantId];

  const { value, isLocked } = colorVariant;

  const [colorState, setColorState] = useState<RGB>(value.rgb);

  useEffect(() => setColorState(value.rgb), [value]);

  const handleChange = (color: ColorResult) => {
    if (isLocked) {
      return;
    }

    const { rgb, hex }: ColorResult = { ...color };
    const alpha: number = rgb.a || DEFAULT_ALPHA_CHANNEL_VALUE;

    const newColor: ColorVariant = generateColorVariant(hex, alpha);

    setColorState(rgb);

    dispatch({
      type: PALETTE_ACTIONS.SetColor,
      payload: { id: colorVariantId, newColorVariant: newColor },
    });
  };

  return (
    <div className={styles.pickerContainer}>
      <div className={styles.closeButtonContainer}>
        <IcoButton icon={<GrFormClose />} isDark={true} onClick={handleClose} />
      </div>
      <ChromePicker
        styles={chromePickerStyles}
        color={colorState}
        onChange={handleChange}
      />
    </div>
  );
};

export default ColorPicker;
