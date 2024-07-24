import { Request, Response } from "express";
import db from "../../models/sequelize";

const uploadCate = async (req: Request, res: Response) => {
  const cateArr = await db.Category.findAll({
    attributes: ["category"],
  });
  res.send(cateArr);
};

export default uploadCate;
