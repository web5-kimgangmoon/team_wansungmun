import { Router } from "express";
import locationSend from "../../services/delivery/locationSend";
import getDeliveryProductList from "../../services/delivery/getDeliveryProductList";
import getDeliveryDetail from "../../services/delivery/detail/getDeliveryDetail";
import postDeliveryComplete from "../../services/delivery/detail/postDeliveryComplete";

const router = Router();

router.post("/locationSend", locationSend);
router.get("/getList", getDeliveryProductList);
router.get("/getDetail", getDeliveryDetail);
router.post("/deliveryComplete", postDeliveryComplete);

export default router;
