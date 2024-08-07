import { Request, Response } from "express";
import getCategoryQuery from "../../queries/sequelize/category/getCategory";

const getCategory = async (req: Request, res: Response) => {
  try {
    res.send(await getCategoryQuery());
  } catch (err) {
    res.send(undefined);
    console.error(err);
  }
};

export default getCategory;
