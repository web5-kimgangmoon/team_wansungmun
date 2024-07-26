import { Request, Response, NextFunction } from "express";
import TradeReceipt from "../../models/sequelize/tradeReceipt";
import Product from "../../models/sequelize/product";

export const trade_receipt = async (req: Request, res: Response) => {
  console.log("전송된 정보 보여줘 :" + req.body);
  try {
    if (req.session.user == req.body.sellerId) {
      res.status(302).send;
    } else {
      const sell = await Product.update(
        {
          tradeStatus: 2,
        },
        { where: { id: req.session.user } }
      );
      //   TradeReceipt.create();
      const receipt = await TradeReceipt.create({
        customerId: req.session.user,
        productId: req.body.productId,
        destination: req.body.locaValue,
        tradeRequest: req.body,
      });
    }
  } catch (err) {
    console.error(err);
  }
};
