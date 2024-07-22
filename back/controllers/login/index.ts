import { Request, Response } from "express";
import User from "../../models/sequelize/user";

export const Login = async (req: Request, res: Response) => {
  try {
    const { userInput } = req.body;
    console.log(req.body.email);
    const userInfo = await User.findOne({
      where: { email: req.body.email },
    });
    if (!userInfo) {
      res.status(301).json({ error: "아이디 또는 비밀번호를 확인해주세요" });
      return;
    } else if (userInfo.password == req.body.password) {
      req.session;
      console.log("아이디: " + userInfo.id);
      req.session.isLogined = true;
      req.session.user = userInfo.id;
      res.status(201).send({
        user: userInfo.id,
        nickname: userInfo.nickname,
      });
      return;
    } else {
      res.status(301).json({ error: "유저를 찾을 수 없습니다" });
    }
    // res.cookie("user", { signed: true });
    // req.session.user = "string";
    // let cookie = req.session;
    // cookie.user = req.body.email;
    // res.send({ user: cookie.user, isLogined: true, nickname: "JOJO" });
    // res.send(`${req.body.email}`);
  } catch (err) {
    console.error(err);
  }
};
