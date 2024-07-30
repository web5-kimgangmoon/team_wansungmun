import { Router } from "express";
import getOrderList from "../../services/orderList";
import getOrderDetail from "../../services/orderList/detail";

const router = Router();

router.get("/get", getOrderList);
router.get("/getDetail", getOrderDetail);

export default router;
