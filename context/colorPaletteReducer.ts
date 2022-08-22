import {
  PaletteState,
  PaletteAction,
  PALETTE_ACTIONS,
  ColorVariant,
} from "./types";

const colorPaletteReducer = (
  state: PaletteState,
  action: PaletteAction
): PaletteState => {
  const { type, payload } = action;

  switch (type) {
    case PALETTE_ACTIONS.SetColor:
      return state.map((colorVariant: ColorVariant, id) => {
        if (id === payload.id) {
          return { ...colorVariant, colorValue: payload.colorValue };
        }

        return colorVariant;
      });
    case PALETTE_ACTIONS.ToggleLock:
      return state.map((colorVariant: ColorVariant, id) => {
        if (id === payload.id) {
          return { ...colorVariant, isLocked: payload.isLocked };
        }

        return colorVariant;
      });
    default:
      return state;
  }
};

export default colorPaletteReducer;
