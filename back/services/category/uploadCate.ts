import { Request, Response } from "express";
import db from "../../models/sequelize";

const uploadCate = async (req: Request, res: Response) => {
  try {
    const cateArr = await db.Category.findAll({
      attributes: ["category"],
    });
    res.send(cateArr);
  } catch (err) {
    res.send(undefined);
    console.error(err);
  }
};

export default uploadCate;
