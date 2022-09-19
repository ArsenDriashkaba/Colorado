import type { NextApiRequest, NextApiResponse } from "next";

import getPalettes from "../../../utils/api/getPalettes";
import pushPalette from "../../../utils/api/pushPalette";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      await getPalettes(req, res);
      return;
    case "POST":
      await pushPalette(req, res);
      return;
  }
};

export default handler;
