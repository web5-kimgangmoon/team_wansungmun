import { Request, Response } from "express";
import Product from "../../models/sequelize/product";

export const sell = async (req: Request, res: Response) => {
  try {
    console.log("req.body는?? : " + req.body);
    console.log("ETC 데이터는?? : " + req.body.etcData);
    console.log(req.session.user);
    console.log(req.files);
    if (req.session.user) {
      await Product.create({
        productName: req.body.etcData.title,
        isDirectTrade: req.body.etcData.isPropose,
        tradeLocation: req.body.etcData.tradeLocation,
        categoryId: req.body.etcData.category,
        sellerId: req.session.user,
        price: req.body.etcData.point,
        content: req.body.etcData.content,
        imgs: "",
        titleImg: "",
      });
      res.status(201).send();
    } else {
    }
  } catch (err) {
    console.error(err);
  }
};
