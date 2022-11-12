import { Router } from "express";
import controller from "../Controller/store.controller.js"


const router = Router();

router.get('/products', controller.getProductItems);

export default router;