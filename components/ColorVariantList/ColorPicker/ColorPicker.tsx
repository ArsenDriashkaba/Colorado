import { useEffect, useState } from "react";
import { ChromePicker, ColorResult } from "react-color";

import { useColorPaletteContext } from "../../../state/colorPaletteContext";
import { PALETTE_ACTIONS } from "../../../state/types";
import { ColorVariant } from "../../../types";

import { DEFAULT_ALPHA_CHANNEL_VALUE } from "../../../constants";
import { generateColorVariant } from "../../../utils/colors";

interface Props {
  colorVariantId: number;
}

const ColorPicker = ({ colorVariantId }: Props): JSX.Element => {
  const { state, dispatch } = useColorPaletteContext();

  const { value } = state[colorVariantId];

  const [colorState, setColorState] = useState(value.rgb);

  useEffect(() => setColorState(value.rgb), [value]);

  const handleChange = (color: ColorResult) => {
    const { rgb, hex }: ColorResult = { ...color };
    const alpha: number = rgb.a || DEFAULT_ALPHA_CHANNEL_VALUE;

    const newColor: ColorVariant = generateColorVariant(hex, alpha);

    setColorState(rgb);

    dispatch({
      type: PALETTE_ACTIONS.SetColor,
      payload: { id: colorVariantId, newColorVariant: newColor },
    });
  };

  return <ChromePicker color={colorState} onChange={handleChange} />;
};

export default ColorPicker;
