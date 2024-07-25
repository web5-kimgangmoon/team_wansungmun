import { Request, Response } from "express";
import valueCheck from "../../../lib/valueCheck";
import postDeliveryCompleteQuery from "../../../queries/sequelize/location/detail/postDeliveryComplete";

const postDeliveryComplete = async (req: Request, res: Response) => {
  try {
    let pId = valueCheck(req.body.productId as string | undefined);
    let uId = valueCheck(req.session.user);
    res.send(await postDeliveryCompleteQuery(uId, pId));
  } catch (err) {
    console.error(err);
    res.send(undefined);
  }
};

export default postDeliveryComplete;
