import User from "../../models/sequelize/user";
import { Request, Response } from "express";

export const Regist = async (req: Request, res: Response) => {
  try {
    const RegistInfo = await User.findAll({
      where: { email: req.body.email as string },
    });
  } catch (err) {
    console.error(err);
  }
};
