import React, { createContext, useReducer, useContext, Context } from "react";
import { PaletteState } from "../types";
import { generateInitialState } from "../utils/colors";
import colorPaletteReducer from "./colorPaletteReducer";
import { PaletteContext, ProviderChildren } from "./types";

const ColorPaletteContext = createContext<PaletteContext>({} as PaletteContext);

const ColorPaletteProvider = ({ children }: ProviderChildren): JSX.Element => {
  const initialState: PaletteState = generateInitialState();

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
