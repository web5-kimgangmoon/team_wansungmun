import Category from "../../models/sequelize/category";
import { Request, Response, NextFunction } from "express";

export const category = async (req: Request, res: Response) => {
  try {
    const cateData = await Category.findAll({
      attributes: ["id", "category"],
    });
    res.status(201).send(cateData);
  } catch (err) {
    console.error(err);
  }
};
