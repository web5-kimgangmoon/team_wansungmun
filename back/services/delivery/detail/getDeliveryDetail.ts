import { Request, Response } from "express";
import getDeliveryDetailQuery from "../../../queries/sequelize/location/detail/getDeliveryDetail";
import valueCheck from "../../../lib/valueCheck";

const getDeliveryDetail = async (req: Request, res: Response) => {
  try {
    let pId = valueCheck(req.query.productId as string | undefined);
    let uId = valueCheck(req.session.user);
    res.send(await getDeliveryDetailQuery(uId, pId));
  } catch (err) {
    console.error(err);
    res.send(undefined);
  }
};

export default getDeliveryDetail;
