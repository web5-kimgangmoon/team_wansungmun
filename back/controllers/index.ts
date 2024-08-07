import { Router } from "express";
import test from "./test";
import { Login } from "./login";
import upload from "./upload";
import sessions from "./session/index";
import { Regist } from "./Regist";
import logCheck from "./logCheck";
import { KakaoLogin } from "./kakaoLogin";

import { Logout } from "./logout";
import category from "./category";
import productInfo from "./productInfo";
import delivery from "./delivery/index";
import { Sell } from "./sell/sell";
import trade from "./trade/trade";
import orderList from "./orderLIst";
import locationCheck from "./locationCheck";

const router = Router();

router.use("/category", category);
router.use("/productInfo", productInfo);
router.use("/test", test);
router.use("/upload", upload);
router.use("/delivery", delivery);
router.use("/trade", trade);
router.use("/orderList", orderList);
router.use("/locationCheck", locationCheck);

router.get("/sell", Sell);
router.get("/logCheck", logCheck);
router.post("/login", Login);
router.post("/regist", Regist);
router.post("/kakaoLogin", KakaoLogin);
router.get("/productinfo");
router.get("/logout", Logout);

// router.use("/session", sessions);

export default router;
