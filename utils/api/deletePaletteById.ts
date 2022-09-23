import type { NextApiRequest, NextApiResponse } from "next";

import connectDatabase from "../../utils/database";

import Palette from "../../utils/models/palette";

import { PaletteState } from "../../types";

import {
  CLIENT_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
} from "../../constants/apiMessages";

type resData = Array<PaletteState> | string;

const deletePaletteById = async (
  req: NextApiRequest,
  res: NextApiResponse<resData>
) => {
  try {
    await connectDatabase();
    const id = req.query.id;
    const paletteData: resData = await Palette.find({ _id: id });

    if (!paletteData) {
      res.status(400).send(CLIENT_ERROR_MESSAGE);
    }

    await Palette.deleteOne({ _id: id });

    res.status(200).send(paletteData);
  } catch (error) {
    res.status(500).send(SERVER_ERROR_MESSAGE);
  }
};

export default deletePaletteById;
