import { Request, Response } from "express";
import getCateProductsQuery from "../../queries/sequelize/product/getCateProducts";
import valueCheck from "../../lib/valueCheck";

const getCateProducts = async (req: Request, res: Response) => {
  try {
    let cateId = valueCheck(req.query.categoryId as string | undefined, 1);
    const data = await getCateProductsQuery(cateId);
    res.send(data);
  } catch (err) {
    res.send(undefined);
    console.error(err);
  }
};

export default getCateProducts;
