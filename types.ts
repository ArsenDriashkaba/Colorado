interface ALphaChannel {
  a?: number;
}

export interface RgbObject {
  r: number;
  g: number;
  b: number;
}

interface HslObject {
  h: number;
  s: number;
  l: number;
}

interface HsvObject {
  h: number;
  s: number;
  v: number;
}

export interface ColorModelObject {
  [key: string]: number;
}

export type RGB = RgbObject & ALphaChannel;

export type HSV = HsvObject & ALphaChannel;

export type HSL = HslObject & ALphaChannel;

export type HexString = string;

export interface ColorValue {
  rgb: RGB;
  hex: HexString;
  hsv: HSV;
  hsl: HSL;
}
export interface ColorVariant {
  value: ColorValue;
  isLocked: boolean;
  isDark: boolean;
}

export type PaletteState = Array<ColorVariant>;

export type ColorModel = RGB | HSV | HSL | HexString;
