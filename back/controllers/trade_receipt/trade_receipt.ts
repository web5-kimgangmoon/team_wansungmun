import { Request, Response, NextFunction } from "express";
import TradeReceipt from "../../models/sequelize/tradeReceipt";
import Product from "../../models/sequelize/product";

export const trade_receipt = async (req: Request, res: Response) => {
  console.log("판매자 아이디 :" + req.body.sellerId);
  console.log("상품 아이디 :" + req.body.Id);

  try {
    if (req.session.user == req.body.sellerId) {
      res.status(302).send;
    } else {
      const sell = await Product.update(
        {
          tradeStatus: 2,
        },
        { where: { id: req.body.id } }
      );
      //   TradeReceipt.create();
      const receipt = await TradeReceipt.create({
        customerId: req.session.user,
        productId: req.body.id,
      });
    }
  } catch (err) {
    console.error(err);
  }
};
