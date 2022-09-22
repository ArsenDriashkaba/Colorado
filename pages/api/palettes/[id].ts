import type { NextApiRequest, NextApiResponse } from "next";
import deletePaletteById from "../../../utils/api/deletePaletteById";
import getPaletteById from "../../../utils/api/getPaletteById";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      await getPaletteById(req, res);
      return;

    case "DELETE":
      await deletePaletteById(req, res);
      return;
  }
};

export default handler;
