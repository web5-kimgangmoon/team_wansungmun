import { Request, Response } from "express";
import User from "../../models/sequelize/user";

export const Product = async (req: Request, res: Response) => {
  const Upload = await User.create();
};
