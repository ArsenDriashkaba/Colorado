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

interface Transparency {
  a?: number;
}

interface RgbObject {
  r: number;
  g: number;
  b: number;
}

interface HslObject {
  h: number;
  s: number;
  l: number;
}

export type ColorObject = (Transparency & (RgbObject | HslObject)) | string;
