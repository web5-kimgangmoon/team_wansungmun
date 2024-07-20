import User from "../../models/sequelize/user";
import { Request, Response } from "express";
import session from "express-session";

export const logCheck = async (req: Request, res: Response) => {
  try {
    if (req.session) {
      req.session.id = await User.findAll({
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
