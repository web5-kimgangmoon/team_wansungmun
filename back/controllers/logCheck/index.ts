import User from "../../models/sequelize/user";
import { Request, Response } from "express";

export const logCheck = async (req: Request, res: Response) => {
  try {
    if (req.session) {
      const body = await User.findAll({
        where: { id: req.session.user },
        include: [
          {
            model: User,
          },
        ],
        attributes: ["id", "authority"],
      });
    }
  } catch (err) {
    console.error(err);
  }
};
