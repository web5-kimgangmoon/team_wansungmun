import { Request, Response } from "express";
import db from "../../models/sequelize";

const getCategory = async (req: Request, res: Response) => {
  const cateArr = await db.Category.findAll({
    attributes: ["category", "id", "cateImg"],
  });
  res.send(cateArr);
};

export default getCategory;
