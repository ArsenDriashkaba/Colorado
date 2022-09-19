import type { NextApiRequest, NextApiResponse } from "next";

import connectDatabase from "../../utils/database";

import Palette from "../../utils/models/palette";

import { PaletteInfo } from "../../types";

import { SERVER_ERROR_MESSAGE } from "../../constants/apiMessages";

type resData = Array<PaletteInfo> | string;

const getPalettes = async (
  req: NextApiRequest,
  res: NextApiResponse<resData>
) => {
  try {
    await connectDatabase();

    const allPalettes: resData = await Palette.find({});

    res.status(200).send(allPalettes);
  } catch (error) {
    res.status(500).send(SERVER_ERROR_MESSAGE);
  }
};

export default getPalettes;
