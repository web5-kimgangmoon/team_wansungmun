import { Request, Response } from "express";
import valueCheck from "../../../lib/valueCheck";
import getOrderDetailQurey from "../../../queries/sequelize/orderList/detail/getOrderDetail";

const getOrderDetail = async (req: Request, res: Response) => {
  try {
    let id = valueCheck(req.session.user);
    let productId = valueCheck(req.query.productId as string);
    res.send(await getOrderDetailQurey(id, productId));
  } catch (err) {
    console.error(err);
    res.send(undefined);
  }
};

export default getOrderDetail;
