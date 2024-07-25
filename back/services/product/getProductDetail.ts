import { Request, Response } from "express";
import getProductDetailQuery from "../../queries/sequelize/product/getProductDetail";
import valueCheck from "../../lib/valueCheck";

const getProductDetail = async (req: Request, res: Response) => {
  try {
    let pid = valueCheck(req.query.productId as string | undefined);
    const data = await getProductDetailQuery(pid);

    // res.status(280).send(data);
    if (!req.session.user) {
      res.status(209).send(data);
    } else if (req.session.user == data?.sellerId) {
      res.status(210).send(data);
    } else res.status(211).send(data);
  } catch (err) {
    console.error(err);
  }
};

export default getProductDetail;
