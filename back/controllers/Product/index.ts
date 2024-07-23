import { Request, Response } from "express";
import Product from "../../models/sequelize/product";

export const sell = async (req: Request, res: Response) => {
  try {
    const seller = req.session.user
    await Product.create({
        productName: req.body.etcData.title,
        categoryId: req.body.etcData.category,
        seller_id: seller,
        isDirectTrade: req.body.etcData.isPropose,
        price: req.body.etcData.point,
        imgs: "",
        titleImg: 
    })
    res.status(201).send()
  } catch (err) {
    console.error(err);
  }
};
