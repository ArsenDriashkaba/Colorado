import React, { createContext, useReducer, useContext } from "react";
import { DEFAULT_PALETTE_NAME } from "../constants";
import colorPaletteReducer from "./colorPaletteReducer";
import { PaletteContext, ProviderChildren } from "./types";

const ColorPaletteContext = createContext<PaletteContext>({} as PaletteContext);

const ColorPaletteProvider = ({ children }: ProviderChildren): JSX.Element => {
  const initialState = { name: DEFAULT_PALETTE_NAME, colorVariants: [] };
  const [state, dispatch] = useReducer(colorPaletteReducer, initialState);

  return (
    <ColorPaletteContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorPaletteContext.Provider>
  );
};

export default ColorPaletteProvider;

export const useColorPaletteContext = () =>
  useContext<PaletteContext>(ColorPaletteContext);
