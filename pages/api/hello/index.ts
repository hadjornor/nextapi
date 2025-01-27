import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "post") {
    res.status(200).json({ message: "Hello from Next api" });
  } else {
    res.status(200).json({ message: "Got something else" });
  }
}
