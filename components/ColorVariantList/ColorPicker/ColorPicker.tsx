import { useEffect, useState } from "react";
import { ChromePicker } from "react-color";

import { useColorPaletteContext } from "../../../state/colorPaletteContext";
import { PALETTE_ACTIONS } from "../../../state/types";

import { generateColorVariant } from "../../../utils/colors";

interface Props {
  colorVariantId: number;
}

const ColorPicker = ({ colorVariantId }: Props): any => {
  const { state, dispatch } = useColorPaletteContext();

  const { value } = state[colorVariantId];

  const [colorState, setColorState] = useState(value.hex);

  useEffect(() => setColorState(value.hex), [value]);

  // ToDO : create type for "color" prop
  const handleChange = (color: any) => {
    const hex = color.hex;
    const newColor = generateColorVariant(hex);

    setColorState(hex);

    dispatch({
      type: PALETTE_ACTIONS.SetColor,
      payload: { id: colorVariantId, newColorVariant: newColor },
    });
  };

  return <ChromePicker color={colorState} onChange={handleChange} />;
};

export default ColorPicker;
