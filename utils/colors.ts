import Color from "color";
import randomColor from "randomcolor";

import {
  ColorVariant,
  PaletteState,
  RGB,
  HexString,
  HSL,
  HSV,
  ColorValue,
  ColorModelObject,
  ColorVariants,
} from "../types";

import {
  NUMBER_OF_COLORS,
  DEFAULT_ALPHA_CHANNEL_VALUE,
  DEFAULT_PALETTE_NAME,
} from "../constants";

const colorObjectToRgba = (colorObject: Color, alpha?: number): RGB => {
  const { r, g, b }: ColorModelObject = { ...colorObject.object() };

  return { r, g, b, a: alpha || DEFAULT_ALPHA_CHANNEL_VALUE };
};

const colorObjectToHexa = (colorObject: Color, alpha?: number): HexString => {
  return colorObject.alpha(alpha || DEFAULT_ALPHA_CHANNEL_VALUE).hexa();
};

const colorObjectToHsv = (colorObject: Color, alpha?: number): HSV => {
  const { h, s, v }: ColorModelObject = { ...colorObject.hsv().object() };

  return { h, s, v, a: alpha || DEFAULT_ALPHA_CHANNEL_VALUE };
};

const colorObjectToHsl = (colorObject: Color, alpha?: number): HSL => {
  const { h, s, l }: ColorModelObject = { ...colorObject.hsl().object() };

  return { h, s, l, a: alpha || DEFAULT_ALPHA_CHANNEL_VALUE };
};

const generatePaletteFromScratch = (): PaletteState => {
  const colorVariants: ColorVariants = [...Array(NUMBER_OF_COLORS)].map(
    (_): ColorVariant => generateColorVariant()
  );

  return { name: DEFAULT_PALETTE_NAME, colorVariants };
};

const regenerateUnlockedColors = (paletteState: PaletteState): PaletteState => {
  const palette: ColorVariants = paletteState.colorVariants;
  const newPalette: ColorVariants = palette.map(
    (colorVariant): ColorVariant => {
      if (colorVariant.isLocked) {
        return colorVariant;
      }

      return generateColorVariant();
    }
  );

  return { ...paletteState, colorVariants: newPalette };
};

export const generateColorVariant = (
  color?: HexString,
  alpha?: number
): ColorVariant => {
  const colorObj = Color(color || randomColor());

  const rgb: RGB = colorObjectToRgba(colorObj, alpha);
  const hex: HexString = colorObjectToHexa(colorObj);
  const hsv: HSV = colorObjectToHsv(colorObj, alpha);
  const hsl: HSL = colorObjectToHsl(colorObj, alpha);

  const value: ColorValue = { rgb, hex, hsv, hsl };
  const isDark: boolean = colorObj.isDark();

  return { isLocked: false, isDark, value };
};

export const generateColorPalette = (
  paletteState?: PaletteState
): PaletteState => {
  if (!paletteState?.colorVariants) {
    return generatePaletteFromScratch();
  }

  return regenerateUnlockedColors(paletteState);
};

export const rgbaToCssString = (rgbValue: RGB): string => {
  const { r, g, b, a } = { ...rgbValue };

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
