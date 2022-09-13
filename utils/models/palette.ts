import { Schema, models, model } from "mongoose";

import {
  PaletteInfo,
  ColorVariant,
  ColorValue,
  RGB,
  HSV,
  HSL,
} from "../../types";

const rgbSchema = new Schema<RGB>({
  r: { type: Number, required: true },
  g: { type: Number, required: true },
  b: { type: Number, required: true },
  a: Number,
});

const hsvSchema = new Schema<HSV>({
  h: { type: Number, required: true },
  s: { type: Number, required: true },
  v: { type: Number, required: true },
  a: Number,
});

const hslSchema = new Schema<HSL>({
  h: { type: Number, required: true },
  s: { type: Number, required: true },
  l: { type: Number, required: true },
  a: Number,
});

const colorValueSchema = new Schema<ColorValue>({
  rgb: { type: rgbSchema, required: true },
  hex: { type: String, required: true },
  hsv: { type: hsvSchema, required: true },
  hsl: { type: hslSchema, required: true },
});

const colorVariantSchema = new Schema<ColorVariant>({
  value: { type: colorValueSchema, required: true },
  isLocked: { type: Boolean, required: true },
  isDark: { type: Boolean, required: true },
});

const paletteSchema = new Schema<PaletteInfo>({
  name: { type: String, required: true },
  colorVariants: { type: [colorVariantSchema], required: true },
});

const Palette = models.Palette || model("Palette", paletteSchema);

export default Palette;
