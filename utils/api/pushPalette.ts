import type { NextApiRequest, NextApiResponse } from "next";

import connectDatabase from "../../utils/database";

import Palette from "../../utils/models/palette";

import { PaletteState } from "../../types";

import { SERVER_ERROR_MESSAGE } from "../../constants/apiMessages";
import { PALETTE_SAVED_SUCCESSFULLY } from "../../constants/paletteActionNotifications";

type resData = string;

const pushPalette = async (
  req: NextApiRequest,
  res: NextApiResponse<resData>
) => {
  try {
    const newPalette: PaletteState = req.body;

    await connectDatabase();

    await Palette.create(newPalette);

    res.status(200).send(PALETTE_SAVED_SUCCESSFULLY);
  } catch (error) {
    res.status(500).send(SERVER_ERROR_MESSAGE);
  }
};

export default pushPalette;
