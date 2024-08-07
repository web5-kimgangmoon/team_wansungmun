import { Request, Response } from "express";
import valueCheck from "../../lib/valueCheck";
import getOrderListQuery from "../../queries/sequelize/orderList/getOrderList";

const getOrderList = async (req: Request, res: Response) => {
  try {
    let id = valueCheck(req.session.user);
    res.send(await getOrderListQuery(id));
  } catch (err) {
    console.error(err);
    res.send(undefined);
  }
};

export default getOrderList;
