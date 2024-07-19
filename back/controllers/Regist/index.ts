import User from "../../models/sequelize/user";
import { Request, Response } from "express";
import { Op } from "sequelize";

export const Regist = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const RegistInfo = await User.findOne({
      where: {
        [Op.or]: [
          { email: { [Op.eq]: req.body.email } },
          { nickname: { [Op.eq]: req.body.nickname } },
          { phoneNum: { [Op.eq]: req.body.phoneNum } },
        ],
      },
    });
    const isEmail = RegistInfo?.email == req.body.email ? true : false;
    const isphoneNum = RegistInfo?.phoneNum == req.body.phoneNum ? true : false;
    const isnickname = RegistInfo?.nickname == req.body.nickname ? true : false;

    console.log();
    if (isEmail) {
      res.status(301).send("이미 가입된 이메일이니다");
    } else if (isphoneNum) {
      res.status(302).send("중복된 휴대폰 번호입니다");
    } else if (isnickname) {
      res.status(303).send("중복된 닉네임입니다");
    } else {
      await User.create({
        email: req.body.email,
        nickname: req.body.nickname,
        phoneNum: req.body.phoneNum,
        password: req.body.password,
      });
    }
  } catch (err) {
    console.error(err);
  }
};
