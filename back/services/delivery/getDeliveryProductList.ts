import { Request, Response } from "express";
import getDeliveryProductListQuery from "../../queries/sequelize/location/getDeliveryProductList";
import valueCheck from "../../lib/valueCheck";
const getDeliveryProductList = async (req: Request, res: Response) => {
  try {
    let id = valueCheck(req.session.user);
    res.send(await getDeliveryProductListQuery(id));
  } catch (err) {
    console.error(err);
    res.send(undefined);
  }
};

export default getDeliveryProductList;
