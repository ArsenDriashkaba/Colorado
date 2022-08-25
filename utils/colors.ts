import Color from "color";
import randomColor from "randomcolor";

import { ColorVariant, PaletteState, ColorObject } from "../types";

import { NUMBER_OF_COLORS } from "../constants";

export const generateColorVariant = (color?: ColorObject): ColorVariant => {
  const colorObj = Color(color || randomColor());

  const rgb = colorObj;
  const hex = colorObj.hexa();
  const cmyk = colorObj.cmyk();
  const hsv = colorObj.hsv();

  const value = { rgb, hex, cmyk, hsv };
  const isDark = colorObj.isDark();

  return { isLocked: false, isDark, value };
};

export const generateColorPalette = (palette?: PaletteState): PaletteState => {
  if (!palette) {
    return [...Array(NUMBER_OF_COLORS)].map(
      (_): ColorVariant => generateColorVariant()
    );
  }

  return palette.map((colorVariant): ColorVariant => {
    if (colorVariant.isLocked) {
      return colorVariant;
    }

    return generateColorVariant();
  });
};
