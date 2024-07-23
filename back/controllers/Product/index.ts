import { Request, Response } from "express";
import Product from "../../models/sequelize/product";

export const sell = async (req: Request, res: Response) => {
  try {
    const seller = req.session.user;
    await Product.create({
      productName: req.body.etcData.title,
      categoryId: req.body.etcData.category,
      isDirectTrade: req.body.etcData.isPropose,
      price: req.body.etcData.point,
      imgs: "",
      tradeLocation: "ㅇㅇ",
      titleImg: "",
      content: "",
      sellerId: 3,
    });
    res.status(201).send();
  } catch (err) {
    console.error(err);
  }
};
