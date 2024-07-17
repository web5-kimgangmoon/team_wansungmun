import { Router } from "express";
import test from "./test";
import { Login } from "./login";
import sessions from "./session/index";

const router = Router();
router.use("/test", test);
router.post("/login", Login);
// router.use("/session", sessions);

export default router;
