import { Request, Response } from "express";
import valueCheck from "../../lib/valueCheck";
import get from "../../queries/sequelize/orderList/getOrderList";
import getFixedLocationQuery from "../../queries/sequelize/location/detail/getFixedLocation";

const getFixedLocation = async (req: Request, res: Response) => {
  try {
    let id = valueCheck(req.session.user);
    let productId = valueCheck(req.query.productId as string);
    res.send(await getFixedLocationQuery(id, productId));
  } catch (err) {
    console.error(err);
    res.send(undefined);
  }
};

export default getFixedLocation;
