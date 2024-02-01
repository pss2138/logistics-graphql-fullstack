import { Router } from "express";
import { getSubscriptionStatus } from "../controllers/payment.controller.js";

const router = Router();
router.get("/stripe", getSubscriptionStatus);

export default router;
