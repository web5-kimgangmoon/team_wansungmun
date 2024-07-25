import { Request, Response } from "express";
import User from "../../models/sequelize/user";
import Location from "../../models/sequelize/location";

export const sell_process = async (req: Request, res: Response) => {
  try {
    if (!req.session.user) {
      res.status(311).send;
    } else {
      const user_info = await User.findAll({
        where: { id: req.session.user },
        attributes: ["phone_num", "point"],
        include: [
          {
            model: Location,
            as: "locationList",
            attributes: ["id", "location", "locationDetail"],
          },
        ],
      });
      console.log(user_info);
      res.status(211).send(user_info);
    }
  } catch (err) {
    console.error(err);
  }
};
