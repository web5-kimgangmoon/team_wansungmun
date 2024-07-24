import { Router } from "express";
import saveLog from "../../services/delivery/saveLog";
import getLocation from "../../services/delivery/getLocation";

const router = Router();

router.post("/saveDB", saveLog);
router.get("/location", getLocation);

export default router;
