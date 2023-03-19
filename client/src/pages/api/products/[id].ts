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
  res: NextApiResponse<Data | any>
) {
  const product = products.find(
    (product) => product.id == Number(req.query.id)
  );
  if (product) res.status(200).json(product);
  else res.status(400).json({ message: "not found" });
}
