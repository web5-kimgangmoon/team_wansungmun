import { Router } from "express";
import getProductDetail from "../../services/product/getProductDetail";

const router = Router();

router.get("/detail", getProductDetail);

export default router;
