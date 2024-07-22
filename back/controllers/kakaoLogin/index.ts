import { Request, Response } from "express";
import User from "../../models/sequelize/user";

export const KakaoLogin = async (req: Request, res: Response) => {
  try {
    console.log("KAKAO USER EMAIL : " + req.body.email);
    const KakaoSearch = await User.findOne({
      where: { email: req.body.email },
    });
    console.log(KakaoSearch);
    if (!KakaoSearch) {
      res.status(202).send(req.body.email);
    } else if (KakaoSearch) {
      console.log("카카오 있니? : " + KakaoSearch.id);
      req.session;
      req.session.isLogined = true;
      req.session.user = KakaoSearch.id;
      res.status(203).send({ id: KakaoSearch.id });
    }
  } catch (err) {
    console.error(err);
  }
};
