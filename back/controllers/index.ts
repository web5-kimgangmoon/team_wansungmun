import { Router } from "express";
import test from "./test";
import { Login } from "./login";
import upload from "./upload";
import sessions from "./session/index";
import { Regist } from "./Regist";
import logCheck from "./logCheck";
import { KakaoLogin } from "./kakaoLogin";
import { sell } from "./Product";

const router = Router();

router.use("/test", test);
router.use("/upload", upload);
router.post("/sell", sell);
router.get("/logCheck", logCheck);
router.post("/login", Login);
router.post("/regist", Regist);
router.post("/kakaoLogin", KakaoLogin);

// router.use("/session", sessions);

export default router;
