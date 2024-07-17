import { Router } from "express";
import uploadImg, { upload } from "../../services/upload/upload";
import getImg from "../../services/getImg/getImg";

const router = Router();

router.post("/upload", upload("imgs"), uploadImg);
router.get("/getImg", getImg);
export default router;
