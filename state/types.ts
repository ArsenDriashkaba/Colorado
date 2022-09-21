import { Dispatch, ReactNode } from "react";

import { ColorVariant, PaletteState } from "../types";

export enum PALETTE_ACTIONS {
  SetColor = "set_color",
  ToggleLock = "toggle_lock",
  SetPalette = "set_palete",
  SetName = "set_name",
}

export interface PalettePayloadChangeColor {
  id: number;
  newColorVariant: ColorVariant;
}

export interface PalettePayloadToggleLock {
  id: number;
}

export interface PalettePayloadSetPalette {
  palette: PaletteState;
}

export interface PalettePayloadSetName {
  name: string;
}

export type PalettePayload =
  | PalettePayloadChangeColor
  | PalettePayloadSetPalette
  | PalettePayloadToggleLock
  | PalettePayloadSetName;

export type PaletteAction =
  | {
      type: PALETTE_ACTIONS.SetColor;
      payload: PalettePayloadChangeColor;
    }
  | {
      type: PALETTE_ACTIONS.ToggleLock;
      payload: PalettePayloadToggleLock;
    }
  | {
      type: PALETTE_ACTIONS.SetPalette;
      payload: PalettePayloadSetPalette;
    }
  | {
      type: PALETTE_ACTIONS.SetName;
      payload: PalettePayloadSetName;
    };

export interface PaletteContext {
  state: PaletteState;
  dispatch: Dispatch<PaletteAction>;
}

export type ProviderChildren = { children: ReactNode };
