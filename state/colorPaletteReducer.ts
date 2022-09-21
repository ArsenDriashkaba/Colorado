import { PaletteAction, PALETTE_ACTIONS } from "./types";
import { PaletteState, ColorVariant, ColorVariants } from "../types";

const colorPaletteReducer = (
  state: PaletteState,
  action: PaletteAction
): PaletteState => {
  const { type, payload } = action;

  //TODO: Refactoring needed

  switch (type) {
    case PALETTE_ACTIONS.SetColor:
      const newPalette: ColorVariants = state.colorVariants.map(
        (colorVariant: ColorVariant, id) => {
          if (id === payload.id) {
            return payload.newColorVariant;
          }

          return colorVariant;
        }
      );

      return { ...state, colorVariants: newPalette };
    case PALETTE_ACTIONS.ToggleLock:
      const newPalette1: ColorVariants = state.colorVariants.map(
        (colorVariant: ColorVariant, id) => {
          if (id === payload.id) {
            return { ...colorVariant, isLocked: !colorVariant.isLocked };
          }

          return colorVariant;
        }
      );

      return { ...state, colorVariants: newPalette1 };
    case PALETTE_ACTIONS.SetName:
      return { ...state, name: payload.name };
    case PALETTE_ACTIONS.SetPalette:
      return payload.palette;
    default:
      return state;
  }
};

export default colorPaletteReducer;
