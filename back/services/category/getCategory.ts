import { Request, Response } from "express";
import getCategoryQuery from "../../queries/sequelize/category/getCategory";

const getCategory = async (req: Request, res: Response) => {
  res.send(await getCategoryQuery());
};

export default getCategory;
