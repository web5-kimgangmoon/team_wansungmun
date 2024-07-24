import { Router } from "express";
import locationSend from "../../services/delivery/locationSend";
import getDeliveryProductList from "../../services/delivery/getDeliveryProductList";

const router = Router();

router.post("/locationSend", locationSend);
router.get("/getList", getDeliveryProductList);

export default router;
