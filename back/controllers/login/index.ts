import { Request, Response } from "express";
import User from "../../models/sequelize/user";

export const Login = async (req: Request, res: Response) => {
  try {
    const { userInput } = req.body;
    console.log(req.body.email);
    // const userInfo = await User.findOne({
    //   where: { email: req.body.email as string },
    // });
    // if (!userInfo) {
    //   res.json({ error: "유저를 찾을 수 없습니다" });
    //   return;
    // } else if (userInfo.password == req.body.password) {
    //   req.session;
    //   res.send(`${req.body.email}`);
    //   return;
    // }
    // res.cookie("user", { signed: true });
    // req.session.user = "string";
    let cookie = req.session;
    cookie.user = req.body.email;
    res.send({ user: cookie.user, isLogined: true, nickname: "JOJO" });
    // res.send(`${req.body.email}`);
  } catch (err) {
    console.error(err);
  }
};
