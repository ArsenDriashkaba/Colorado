import { Dispatch, ReactNode } from "react";

export const enum PALETTE_ACTIONS {
  SetColor = "set_color",
  ToggleLock = "toggle_lock",
}

export interface PalettePayloadChangeColor {
  id: number;
  colorValue: string;
}

export interface PalettePayloadToggleLock {
  id: number;
  isLocked: boolean;
}

export interface PaletteAction {
  type: string;
  payload: PalettePayloadChangeColor & PalettePayloadToggleLock;
}

export interface ColorVariant {
  colorValue: string;
  isLocked: boolean;
}

export type PaletteState = ColorVariant[];

export interface PaletteContext {
  state: PaletteState;
  dispatch: Dispatch<PaletteAction>;
}

export type ProviderChildren = { children: ReactNode };
