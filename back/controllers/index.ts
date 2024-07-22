import { Router } from "express";
import test from "./test";
import { Login } from "./login";
import upload from "./upload";
import sessions from "./session/index";
import { Regist } from "./Regist";
import logCheck from "./logCheck";
import { KakaoLogin } from "./kakaoLogin";

const router = Router();
router.post("/login", Login);
router.post("/regist", Regist);
router.get("/logCheck", logCheck);

// router.use("/session", sessions);
router.use("/kakaoLogin", KakaoLogin);
router.use("/test", test);
router.use("/upload", upload);

export default router;
