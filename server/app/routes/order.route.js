import { Router } from "express";
import { createOrder, getOrders } from "../controllers/order.controller.js";

const router = Router();
router.get("/", getOrders);

export default router;
