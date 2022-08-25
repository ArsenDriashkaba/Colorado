import { PaletteAction, PALETTE_ACTIONS } from "./types";
import { PaletteState, ColorVariant } from "../types";

const colorPaletteReducer = (
  state: PaletteState,
  action: PaletteAction
): PaletteState => {
  const { type, payload } = action;

  switch (type) {
    case PALETTE_ACTIONS.SetColor:
      return state.map((colorVariant: ColorVariant, id) => {
        if (id === payload.id) {
          return payload.newColorVariant;
        }

        return colorVariant;
      });
    case PALETTE_ACTIONS.ToggleLock:
      return state.map((colorVariant: ColorVariant, id) => {
        if (id === payload.id) {
          return { ...colorVariant, isLocked: !colorVariant.isLocked };
        }

        return colorVariant;
      });
    case PALETTE_ACTIONS.SetPalette:
      return payload.palette;
    default:
      return state;
  }
};

export default colorPaletteReducer;
