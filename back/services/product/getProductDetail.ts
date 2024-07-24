import { Request, Response } from "express";
import getProductDetailQuery from "../../queries/sequelize/product/getProductDetail";

const getProductDetail = async (req: Request, res: Response) => {
  if (!req.query.productId) req.query.productId = "-1";
  const data = await getProductDetailQuery(+req.query.productId);
  res.send(data);
};

export default getProductDetail;
