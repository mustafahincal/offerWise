// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(products);
}
