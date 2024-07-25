import { Request, Response } from "express";
import getProductDetailQuery from "../../queries/sequelize/product/getProductDetail";

const getProductDetail = async (req: Request, res: Response) => {
  if (!req.query.productId || Number.isNaN(+req.query.productId))
    req.query.productId = "-1";
  const data = await getProductDetailQuery(+req.query.productId);

  // res.status(280).send(data);
  if (!req.session.user) {
    res.status(209).send(data);
  } else if (req.session.user == data?.sellerId) {
    res.status(210).send(data);
  } else res.status(211).send(data);
};

export default getProductDetail;
