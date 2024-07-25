import { Request, Response } from "express";
import User from "../../models/sequelize/user";

export const sell = async (req: Request, res: Response) => {
  const userInfo = await User.findOne({ where: { id: req.session.user } });
  res.send(userInfo);
};
