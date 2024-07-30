import { Request, Response } from "express";
import valueCheck from "../../lib/valueCheck";
import getLocationQuery from "../../queries/mongoose/location/getLocation";

const getLocation = async (req: Request, res: Response) => {
  try {
    let id = valueCheck(req.session.user);
    let productId = valueCheck(req.query.productId as string);
    res.send(await getLocationQuery(productId, id));
  } catch (err) {
    console.error(err);
    res.send(undefined);
  }
};

export default getLocation;
