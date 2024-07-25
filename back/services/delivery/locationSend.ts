import { Request, Response } from "express";
import locationSendQueryMy from "../../queries/sequelize/location/locationSend";
import locationSendQueryMong from "../../queries/mongoose/location/locationSend";
import locationSendStateUpdateQuery from "../../queries/sequelize/location/locationSendStateUpdate";
import valueCheck from "../../lib/valueCheck";
const locationSend = async (req: Request, res: Response) => {
  try {
    let id = valueCheck(req.session.user);
    console.log(id);
    let lat = valueCheck(req.body.lat as string | undefined, 33.5563);
    let lng = valueCheck(req.body.lng as string | undefined, 126.79581);
    const users = await locationSendQueryMy(id);
    for (let item of users ? users : []) {
      const targetId = await item.getTradeReceipts({
        where: { deletedAt: null },
      });
      if (targetId.length > 0)
        await locationSendQueryMong(lat, lng, item.id, targetId[0].customerId);
    }
    await locationSendStateUpdateQuery(id);

    res.send(true);
  } catch (err) {
    res.send(false);
  }
};

export default locationSend;
