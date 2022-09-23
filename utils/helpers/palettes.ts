import { PalettesInfo } from "../../types";

export const deletePaletteFromArray = (
  _id: string,
  palettes: PalettesInfo
): PalettesInfo => {
  return palettes.filter((palette) => palette._id !== _id);
};
