import { Router } from "express";
import { trade_receipt } from "../trade_receipt/trade_receipt";
import { sell_process } from "../../services/trade/sell_process";

const router = Router();

router.post("/sellcomplete", trade_receipt);
router.get("/sell_process", sell_process);

export default router;
