import User from "../../models/sequelize/user";
import { Request, Response, NextFunction } from "express";
import index from "../../src/types/index";
const logCheck = async (req: Request, res: Response) => {
  try {
    console.log("dddd");
    console.log("user의 아이디는? :" + req.session.user);

    if (req.session.user) {
      const loginData = await User.findAll({
        where: { id: req.session.user },
        attributes: ["id", "authority"],
      });
      console.log(loginData);
      res.status(201).send(loginData);
    } else {
      res.status(304).send();
      console.log("로그인: 실패");
    }
  } catch (err) {
    console.error(err);
  } finally {
    // next();
  }
};

export default logCheck;
