import { Request, Response } from "express";
import db from "../../models/sequelize";
import test from "../test";

const getCateProducts = async (req: Request, res: Response) => {
  let cateId;
  if (!req.query.categoryId) req.query.categoryId = "1";
  if (Number.isNaN((cateId = +req.query.categoryId as number))) cateId = 1;
  const data = await test(cateId);
  res.send(data);
};

export default getCateProducts;
