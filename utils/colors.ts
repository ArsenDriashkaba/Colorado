import Color from "color";
import randomColor from "randomcolor";

import { ColorVariant, PaletteState } from "../types";

import { NUMBER_OF_COLORS } from "../constants";

export const generateColorVariant = (): ColorVariant => {
  const randColor = randomColor();
  const colorObj = Color(randColor);

  const rgb = colorObj;
  const hex = colorObj.hexa();
  const cmyk = colorObj.cmyk();
  const hsv = colorObj.hsv();

  const value = { rgb, hex, cmyk, hsv };
  const isDark = colorObj.isDark();

  return { isLocked: false, isDark, value };
};

export const generateInitialState = (): PaletteState => {
  return [...Array(NUMBER_OF_COLORS)].map(
    (element): ColorVariant => generateColorVariant()
  );
};
