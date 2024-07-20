import { Router } from "express";
import test from "./test";
import { Login } from "./login";
import upload from "./upload";
import sessions from "./session/index";
import { Regist } from "./Regist";
import { logCheck } from "./logCheck";

const router = Router();
router.use("/test", test);
router.post("/login", Login);
router.use("/regist", Regist);
// router.use("/session", sessions);

router.use("/test", test);
router.use("/upload", upload);
// router.use("/logCheck", logCheck);

export default router;
