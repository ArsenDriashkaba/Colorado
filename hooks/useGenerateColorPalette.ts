import { useEffect } from "react";

import { generateColorPalette } from "../utils/colors";

import { useColorPaletteContext } from "../state/colorPaletteContext";
import { PALETTE_ACTIONS } from "../state/types";
import { PaletteState } from "../types";

type GenerateColorPaletteHook = { handleGeneratePalette: () => void };

const useGenerateColorPalette = (): GenerateColorPaletteHook => {
  const { state, dispatch } = useColorPaletteContext();

  const setPalette = (palette?: PaletteState): void => {
    const generatedPalette: PaletteState = generateColorPalette(palette);

    dispatch({
      type: PALETTE_ACTIONS.SetPalette,
      payload: { palette: generatedPalette },
    });
  };

  const handleGeneratePalette = (): void => setPalette(state);

  useEffect(setPalette, [dispatch]);

  return { handleGeneratePalette };
};

export default useGenerateColorPalette;
