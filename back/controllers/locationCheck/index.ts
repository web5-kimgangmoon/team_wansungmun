import { Router } from "express";
import getFixedLocation from "../../services/locationCheck/getFixedLocation";
import getLocation from "../../services/locationCheck/getLocation";

const router = Router();

router.get("/getFixed", getFixedLocation);
router.get("/get", getLocation);

export default router;
