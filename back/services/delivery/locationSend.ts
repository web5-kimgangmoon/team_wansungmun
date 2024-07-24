import { Request, Response } from "express";
import locationSendQueryMy from "../../queries/sequelize/location/locationSend";
import locationSendQueryMong from "../../queries/mongoose/location/locationSend";
import locationGetQuery from "../../queries/mongoose/location/getLocation";
import locationSendStateUpdateQuery from "../../queries/sequelize/location/locationSendStateUpdate";
import getDeliveryProductListQuery from "../../queries/sequelize/location/getDeliveryProductList";
import db from "../../models/sequelize";
const locationSend = async (req: Request, res: Response) => {
  try {
    let id = req.body.data.deliveryId ? +req.body.data.deliveryId : -1;
    let lat = req.body.data.lat ? +req.body.data.lat : 33.5563;
    let lng = req.body.data.lng ? +req.body.data.lng : 126.79581;
    if (Number.isNaN(id)) id = -1;
    if (Number.isNaN(lat)) lat = 33.5563;
    if (Number.isNaN(lng)) lng = 126.79581;
    const users = await locationSendQueryMy(id);
    for (let item of users ? users : []) {
      const targetId = await item.getTradeReceipts();
      if (targetId)
        await locationSendQueryMong(lat, lng, item.id, targetId[0].customerId);
    }
    locationSendStateUpdateQuery(id);

    res.send(true);
  } catch (err) {
    res.send(false);
  }
};

export default locationSend;
