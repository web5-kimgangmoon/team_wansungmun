import { Request, Response } from "express";
import getDeliveryProductListQuery from "../../queries/sequelize/location/getDeliveryProductList";
const getDeliveryProductList = async (req: Request, res: Response) => {
  let id = req.session.user ? req.session.user : -1;
  if (Number.isNaN(id)) id = -1;
  res.send(await getDeliveryProductListQuery(id));
};

export default getDeliveryProductList;
