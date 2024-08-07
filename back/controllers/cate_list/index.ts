import Product from "../../models/sequelize/product";
import { Request, Response } from "express";
import User from "../../models/sequelize/user";

export const cate_list = async (req: Request, res: Response) => {
  try {
    console.log("category get test");
    const listData = await Product.findAll({
      where: { id: req.query },
      attributes: ["id"],
      include: [
        {
          model: User,
          attributes: ["nickname"],
        },
      ],
    });
    res.send(listData);
  } catch (err) {
    console.error(err);
  }
};
