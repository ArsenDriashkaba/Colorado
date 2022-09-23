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

export type ColorModelObject = Record<string, number>;

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

export type ColorVariants = Array<ColorVariant>;

export interface PaletteState {
  _id?: string;
  name: string;
  colorVariants: ColorVariants;
}

export type PalettesInfo = Array<PaletteState>;

export type ColorModel = RGB | HSV | HSL | HexString;

export enum BUTTON_TYPES {
  Default = "default",
  IconButton = "icon button",
}

export enum NOTIFICATION_TYPES {
  Info = "info",
  Success = "success",
  Warning = "warning",
  Error = "error",
  Default = "default",
}
