import { Request, Response } from "express";
import getCateProductsQuery from "../../queries/sequelize/product/getCateProducts";

const getCateProducts = async (req: Request, res: Response) => {
  let cateId;
  if (!req.query.categoryId) req.query.categoryId = "1";
  if (Number.isNaN((cateId = +req.query.categoryId as number))) cateId = 1;
  const data = await getCateProductsQuery(cateId);
  res.send(data);
};

export default getCateProducts;
