import type { NextApiRequest, NextApiResponse } from "next";

import connectDatabase from "../../utils/database";

import Palette from "../../utils/models/palette";

import { PaletteInfo } from "../../types";

import {
  CLIENT_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
} from "../../constants/apiMessages";

type resData = Array<PaletteInfo> | string;

const getPaletteById = async (
  req: NextApiRequest,
  res: NextApiResponse<resData>
) => {
  try {
    await connectDatabase();

    const paletteData: resData = await Palette.find({ id: req.query.id });

    if (!paletteData) {
      res.status(400).send(CLIENT_ERROR_MESSAGE);
    }

    res.status(200).send(paletteData);
  } catch (error) {
    res.status(500).send(SERVER_ERROR_MESSAGE);
  }
};

export default getPaletteById;
