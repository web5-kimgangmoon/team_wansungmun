import { Router } from "express";
import test from "./test";
import { Login } from "./login";
import upload from "./upload";
import sessions from "./session/index";
import { Regist } from "./Regist";

const router = Router();
router.use("/test", test);
router.post("/login", Login);
router.use("/regist", Regist);
// router.use("/session", sessions);

router.use("/test", test);
router.use("/upload", upload);

export default router;
