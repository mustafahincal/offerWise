import { products } from "@/data";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  products.push({ ...req.body, id: products.length + 1 });
  res.status(200).json(req.body);
}
