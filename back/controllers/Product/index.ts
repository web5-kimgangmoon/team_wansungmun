import { Request, Response } from "express";
import Product from "../../models/sequelize/product";

export const sell = async (req: Request, res: Response) => {
  try {
    console.log(req.body.etcData);
    await Product.create({
      productName: req.body.etcData.title,
      isDirectTrade: req.body.etcData.isPropose,
      tradeLocation: "",
      categoryId: req.body.etcData.category,
      sellerId: req.session.user,
      price: req.body.etcData.point,
      content: req.body.etcData.content,
      imgs: "",
      titleImg: "",
    });
    res.status(201).send();
  } catch (err) {
    console.error(err);
  }
};
