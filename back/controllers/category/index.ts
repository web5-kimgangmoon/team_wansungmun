import { Router } from "express";
import getCategory from "../../services/category/get";
import getCateProducts from "../../services/category/getProducts";
import uploadCate from "../../services/category/uploadCate";

const router = Router();

router.get("/get", getCategory);
router.get("/getProducts", getCateProducts);
router.get("/uploadpage", uploadCate);

export default router;
