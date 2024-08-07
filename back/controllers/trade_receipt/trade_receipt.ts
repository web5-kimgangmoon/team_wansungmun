import { Request, Response } from "express";
import TradeReceipt from "../../models/sequelize/tradeReceipt";
import Product from "../../models/sequelize/product";

export const trade_receipt = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    await Product.update(
      {
        tradeStatus: 2,
        deliveryUserId: 3,
      },
      { where: { id: req.body.productId } }
    );
    //   TradeReceipt.create();
    await TradeReceipt.create({
      customerId: req.session.user,
      productId: req.body.productId,
      tradeRequest: req.body.reqContent,
      destination: req.body.locaValue.location,
      destinationDetail: req.body.locaValue.detailLoca,
      latitude: req.body.locaValue.latitude,
      longitude: req.body.locaValue.longitude,
    });
    res.status(211).send;
  } catch (err) {
    console.error(err);
  }
};
