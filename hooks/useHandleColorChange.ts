import { useState, useEffect } from "react";

import { ColorVariant, RGB } from "../types";
import { ColorResult } from "react-color";

import { generateColorVariant } from "../utils/colors";

import { DEFAULT_ALPHA_CHANNEL_VALUE } from "../constants";

import { useColorPaletteContext } from "../state/colorPaletteContext";
import { PALETTE_ACTIONS } from "../state/types";

type HandleColorChangeHook = [RGB, (color: ColorResult) => void];

const useHandleColorChange = (
  colorVariantId: number
): HandleColorChangeHook => {
  const { state, dispatch } = useColorPaletteContext();
  const colorVariant: ColorVariant = state[colorVariantId];

  const { value, isLocked } = colorVariant;

  const [colorState, setColorState] = useState<RGB>(value.rgb);

  useEffect(() => setColorState(value.rgb), [value]);

  const handleChange = (color: ColorResult): void => {
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

  return [colorState, handleChange];
};

export default useHandleColorChange;
