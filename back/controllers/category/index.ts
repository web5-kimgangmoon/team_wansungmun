import { Router } from "express";
import getCategory from "../../services/category/get";
import getCateProducts from "../../services/category/getProducts";

const router = Router();

router.get("/get", getCategory);
router.get("/getProducts", getCateProducts);

export default router;
