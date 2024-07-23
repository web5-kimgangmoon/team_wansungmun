import { Request, Response } from "express";
import test2 from "../test2";

const getProductDetail = async (req: Request, res: Response) => {
  if (!req.query.productId) req.query.productId = "-1";
  const data = await test2(+req.query.productId);
  res.send(data);
};

export default getProductDetail;
