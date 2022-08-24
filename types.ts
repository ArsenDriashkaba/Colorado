import Color from "color";

export interface ColorValue {
  rgb: Color;
  hex: string;
  cmyk: Color;
  hsv: Color;
}
export interface ColorVariant {
  value: ColorValue;
  isLocked: boolean;
  isDark: boolean;
}

export type PaletteState = ColorVariant[];
