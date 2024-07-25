import { Request, Response } from "express";
import User from "../../models/sequelize/user";

export const Sell = async (req: Request, res: Response) => {
  try {
    console.log("REQUEST TEST");
    const userInfo = await User.findOne({ where: { id: req.session.user } });
    res.send(userInfo);
  } catch (err) {
    console.error(err);
  }
};
