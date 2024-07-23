import { Router } from "express";
import { upload, uploadMulter } from "../../services/upload/upload";
import getImg from "../../services/getImg/getImg";
import { sell } from "../Product";

const router = Router();

router.post("/upload", uploadMulter("imgs"), upload);
router.get("/getImg", getImg);
export default router;
